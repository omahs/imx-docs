import React, { useEffect, useRef } from 'react';
import { useCookies } from 'react-cookie';
import { useHistory } from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

interface Props {
  children: React.ReactNode;
}

// Default implementation, that you can customize
export default function Root({ children }: Props) {
  const { siteConfig } = useDocusaurusContext();

  const history = useHistory();
  const [cookies, setCookie] = useCookies(['nps_shown']);

  const pagesVisited = useRef<number>(0);
  const npsCookieSet = useRef<boolean>(false);

  // Handle Survicate NPS survey
  useEffect(() => {
    return history.listen(() => {
      // If cookie exists, it hasn't been a month since user was last shown NPS survey
      if (cookies.nps_shown !== undefined) return;
      if (npsCookieSet.current == true) return;

      pagesVisited.current = pagesVisited.current + 1;

      if (pagesVisited.current >= 5) {
        if (window._sva) {
          window._sva.destroyVisitor();

          const surveyId = (siteConfig.customFields.survicate as any).nps
            .surveyId;

          window._sva.showSurvey(surveyId, {
            forceDisplay: true,
            displayMethod: 'immediately',
          });

          // Do not show the survey for another month after showing
          let expiryDate = new Date();
          expiryDate.setMonth(expiryDate.getMonth() + 1);
          setCookie('nps_shown', true, { path: '/', expires: expiryDate });
          npsCookieSet.current = true;
        }
      }
    }, []);
  }, []);

  return children;
}
