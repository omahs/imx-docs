import React, { useEffect, useRef, useState } from 'react';
import Button from '@site/src/components/Button';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';

interface Rating {
  [key: string]: number;
}

const StarRating = (numOfStars: number) => {
  return (
    <div className={styles.starsWrapper}>
      {[...Array(5)].map((star, i) => {
        return (
          <span
            key={i}
            title={'Page Rating'}
            className={i + 1 <= numOfStars ? styles.on : styles.off}
          >
            &#9733;
          </span>
        );
      })}
    </div>
  );
};

const SurvicateWidget = () => {
  const { siteConfig } = useDocusaurusContext();

  const [rating, setRating] = useState<number>(0);
  const ratingRef = useRef<number>(0); // used for event listener callbacks
  ratingRef.current = rating;

  // use a temporary state as survey
  // can be closed before completing
  const [tempRating, setTempRating] = useState<number>(0);
  const tempRatingRef = useRef<number>(0); // used for event listener callbacks
  tempRatingRef.current = tempRating;

  useEffect(() => {
    const pageUrl = window.location.pathname;
    const cachedRating: Rating = JSON.parse(
      localStorage.getItem('sva_ratings')
    );
    if (cachedRating && cachedRating[pageUrl]) {
      setRating(cachedRating[pageUrl]);
    }
    return () => {
      setRating(0);
    };
  }, []);

  const handleSurvicateAnswer = (
    surveyId: string,
    questionId: number,
    answer: any
  ) => {
    // we only care about the rating question
    const id = (siteConfig.customFields.survicate as any).starRatingQuestionId;
    if (questionId === parseInt(id)) {
      const score = parseInt(answer.answer_value);
      setTempRating(score);
    }
  };

  const handleSurvicateSurveyCompleted = () => {
    setRating(tempRatingRef.current);
    let existingRatings = JSON.parse(localStorage.getItem('sva_ratings')) || {};
    existingRatings[window.location.pathname] = tempRatingRef.current;
    localStorage.setItem('sva_ratings', JSON.stringify(existingRatings));
  };

  const addSurvicateEventListeners = () => {
    window._sva.addEventListener(
      'survey_completed',
      handleSurvicateSurveyCompleted
    );
    window._sva.addEventListener('question_answered', handleSurvicateAnswer);
  };

  useEffect(() => {
    if (window._sva) {
      addSurvicateEventListeners();
    } else {
      window.addEventListener('SurvicateReady', addSurvicateEventListeners);
    }

    return () => {
      if (window._sva) {
        window._sva.removeEventListener(
          'question_answered',
          handleSurvicateAnswer
        );
      }
      window.removeEventListener('SurvicateReady', addSurvicateEventListeners);
    };
  }, []);

  const handleSurvicate = async () => {
    // assume every new attempt at a rating is a new rating
    // or re-rating an existing rating
    window._sva.destroyVisitor();

    const surveyId = (siteConfig.customFields.survicate as any).surveyId;
    return window._sva.showSurvey(surveyId, {
      forceDisplay: true,
      displayMethod: 'immediately',
    });
  };

  return (
    <Button variant="solid" size="md" onClick={handleSurvicate}>
      <div className={styles.ratingWrapper}>
        {'Rate this page:'}
        {StarRating(rating || 0)}
      </div>
    </Button>
  );
};

export default SurvicateWidget;
