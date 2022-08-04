import React, { useEffect, useRef, useState } from 'react';
import Button from '@site/src/components/Button';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';

interface Rating {
  score: number;
  page: string;
  createdAt: Date;
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

  const [ratings, setRatings] = useState<Rating[]>(
    JSON.parse(localStorage.getItem('sva_ratings')) || []
  );

  // use a temporary state as survey
  // can be closed before completing
  const [tempRatings, setTempRatings] = useState<Rating[]>([]);
  const tempRatingsRef = useRef();
  tempRatingsRef.current = tempRatings;

  const pageRating = ratings.find(
    (rating: Rating) => rating.page === window.location.href
  );

  const handleSurvicateAnswer = (
    surveyId: string,
    questionId: number,
    answer: any
  ) => {
    // we only care about the rating question
    const id = (siteConfig.customFields.survicate as any).starRatingQuestionId;
    if (questionId === parseInt(id)) {
      const score = answer.answer_value;
      const page = window.location.href;

      let existingRatings = ratings;

      if (pageRating)
        existingRatings = existingRatings.filter((r) => r.page !== page);

      const updatedRatings = [
        ...existingRatings,
        {
          score,
          page,
          createdAt: new Date(),
        },
      ];

      setTempRatings(updatedRatings);
    }
  };

  const handleSurvicateSurveyCompleted = () => {
    setRatings(tempRatingsRef.current);
    localStorage.setItem('sva_ratings', JSON.stringify(tempRatingsRef.current));
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
      window._sva.removeEventListener(
        'question_answered',
        handleSurvicateAnswer
      );
      window.removeEventListener('SurvicateReady', addSurvicateEventListeners);
    };
  }, []);

  const handleSurvicate = async () => {
    // assume every new rating is a new rating
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
        {StarRating(pageRating?.score || 0)}
      </div>
    </Button>
  );
};

export default SurvicateWidget;
