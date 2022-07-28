import React, { useEffect } from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import DocSidebar from '@theme-original/DocSidebar';
// import SdkSwitcher from '@site/src/components/SdkSwitcher';
import styles from './styles.module.css';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

interface SidebarProps {
  path: string;
}

const DocSidebarWrapper = (props: SidebarProps) => {
  const { siteConfig } = useDocusaurusContext();
  // const isSdkDocsPath = props.path.startsWith('/sdk-docs/') || false;

  const addSurvicateEventListener = () => {
    window._sva.addEventListener(
      'question_answered',
      function (surveyId, questionId, answer) {
        console.log('surveyId: ', surveyId);
        console.log('questionId: ', questionId);
        console.log('answer: ', answer);
        console.log('------------------------------------------------');
      }
    );
  };

  useEffect(() => {
    // Disabling automatic targeting
    // https://developers.survicate.com/javascript/configuration/#disabling-automatic-targeting
    // (function (opts) {
    //   opts.disableTargeting = true;
    // })((window._sva = window._sva || {}));

    if (window._sva !== undefined) {
      addSurvicateEventListener();
    }

    // Ensure Survicate script has loaded
    // when attempting to addEventListener
    window.addEventListener('SurvicateReady', function () {
      addSurvicateEventListener();
    });
  }, []);

  const handleOnClick = () => {
    const surveyId = (siteConfig.customFields.survicate as any).surveyId;
    return window._sva.showSurvey(surveyId, {
      forceDisplay: true,
      displayMethod: 'immediately',
    });
  };

  return (
    <BrowserOnly>
      {() => (
        <div className={styles.sidebar}>
          {/* {isSdkDocsPath && <SdkSwitcher />} */}
          <button onClick={handleOnClick}>Rate this page</button>
          <DocSidebar {...props} />
        </div>
      )}
    </BrowserOnly>
  );
};

export default DocSidebarWrapper;
