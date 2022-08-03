import React, { useEffect, useState } from 'react';
import Button from '@site/src/components/Button';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

interface Rating {
  answer: number;
  page: string;
  createdAt: Date;
}

const SurvicateWidget = () => {
  const { siteConfig } = useDocusaurusContext();

  const [ratings, setRatings] = useState<Rating[]>(
    JSON.parse(localStorage.getItem('sva_ratings')) || []
  );

  const handleSurvicateAnswer = (surveyId, questionId, answer) => {
    // we only care about the rating question
    console.log('answer', answer);
    if (questionId === 1459131) {
      const mockAnswer = 5;
      const pageUrl = window.location.href;

      const updatedRatings = [
        ...ratings,
        {
          answer: mockAnswer,
          page: pageUrl,
          createdAt: new Date(),
        },
      ];

      setRatings(updatedRatings);
      localStorage.setItem('sva_ratings', JSON.stringify(updatedRatings));
    }
  };

  const addSurvicateEventListener = () => {
    return window._sva.addEventListener(
      'question_answered',
      handleSurvicateAnswer
    );
  };

  useEffect(() => {
    window.addEventListener('SurvicateReady', addSurvicateEventListener);
    return () => {
      window._sva.removeEventListener('question_answered');
      window.removeEventListener('SurvicateReady', addSurvicateEventListener);
    };
  }, []);

  const handleSurvicate = () => {
    const surveyId = (siteConfig.customFields.survicate as any).surveyId;
    return window._sva.showSurvey(surveyId, {
      forceDisplay: true,
      displayMethod: 'immediately',
    });
  };

  const pageRated = ratings.find(
    (rating: Rating) => rating.page === window.location.href
  );

  return (
    <>
      {pageRated ? (
        <p>Rated with Score: {pageRated.answer}</p>
      ) : (
        <Button variant="solid" onClick={handleSurvicate}>
          {'Rate this page ⭐️'}
        </Button>
      )}
    </>
  );
};

export default SurvicateWidget;
