import React, { useEffect } from 'react';
import Button from '@site/src/components/Button';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

const SurvicateWidget = () => {
  const { siteConfig } = useDocusaurusContext();

  const addSurvicateEventListener = () => {
    window._sva.addEventListener(
      'question_answered',
      function (surveyId, questionId, answer) {
        // TODO: persist answer to cache
      }
    );
  };

  useEffect(() => {
    window.addEventListener('SurvicateReady', function () {
      addSurvicateEventListener();
    });

    if (window._sva !== undefined) {
      addSurvicateEventListener();
    }
  }, []);

  const handleSurvicate = () => {
    const surveyId = (siteConfig.customFields.survicate as any).surveyId;
    console.log('surveyId: ' + surveyId);
    return window._sva.showSurvey(surveyId, {
      forceDisplay: true,
      displayMethod: 'immediately',
    });
  };

  return (
    <Button variant="solid" onClick={handleSurvicate}>
      {'Rate this page ⭐️'}
    </Button>
  );
};

export default SurvicateWidget;
