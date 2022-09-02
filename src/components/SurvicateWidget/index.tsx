import React, { useEffect, useRef, useState } from 'react';
import Button from '@site/src/components/Button';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';
import { times } from 'lodash';
// @ts-ignore
import { useDoc } from '@docusaurus/theme-common/internal';

interface Rating {
  [key: string]: number;
}

const StarRating = (numOfStars: number) => {
  return (
    <div className={styles.starsWrapper}>
      {times(5).map((star, i) => {
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
  const {
    frontMatter: { keywords },
  } = useDoc();

  const [rating, setRating] = useState<number>(0);
  const ratingRef = useRef<number>(0); // used for event listener callbacks
  ratingRef.current = rating;

  // use a temporary state as survey
  // can be closed before completing
  const [tempRating, setTempRating] = useState<number>(0);
  const tempRatingRef = useRef<number>(0); // used for event listener callbacks
  tempRatingRef.current = tempRating;

  useEffect(() => {
    const formattedPathname = window.location.pathname.replace(/\/$/, ''); // strip trailing slash
    const cachedRating: Rating = JSON.parse(
      localStorage.getItem('sva_ratings')
    );
    if (cachedRating && cachedRating[formattedPathname]) {
      setRating(cachedRating[formattedPathname]);
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
    const id = (siteConfig.customFields.survicate as any).dqs
      .starRatingQuestionId;
    if (questionId === parseInt(id)) {
      const score = parseInt(answer.answer_value);
      setTempRating(score);
    }
  };

  const handleSurvicateSurveyCompleted = () => {
    setRating(tempRatingRef.current);
    const formattedPathname = window.location.pathname.replace(/\/$/, ''); // strip trailing slash
    let existingRatings = JSON.parse(localStorage.getItem('sva_ratings')) || {};
    existingRatings[formattedPathname] = tempRatingRef.current;
    localStorage.setItem('sva_ratings', JSON.stringify(existingRatings));
  };

  const getArticleTeamOwners = () => {
    if (keywords && keywords.length > 0) {
      const teamOwners = keywords.filter((k) => k.includes('imx-'));
      return teamOwners;
    }
    return [];
  };

  const addSurvicateEventListeners = () => {
    window._sva.addEventListener(
      'survey_completed',
      handleSurvicateSurveyCompleted
    );
    window._sva.addEventListener('question_answered', handleSurvicateAnswer);
  };

  const setupSurvicate = () => {
    addSurvicateEventListeners();

    const teamOwners = getArticleTeamOwners();

    // https://developers.survicate.com/javascript/configuration/#disabling-automatic-targeting
    (function (opts) {
      opts.disableTargeting = true;
    })((window._sva = window._sva || {}));

    // https://developers.survicate.com/javascript/methods/#set-visitor-traits
    if (teamOwners.length > 0) {
      window._sva.setVisitorTraits({
        imx_teams: teamOwners.toString(),
      });
    }
  };

  useEffect(() => {
    if (window._sva) {
      setupSurvicate();
    } else {
      window.addEventListener('SurvicateReady', setupSurvicate);
    }

    return () => {
      if (window._sva) {
        window._sva.removeEventListener(
          'question_answered',
          handleSurvicateAnswer
        );
      }
      window.removeEventListener('SurvicateReady', setupSurvicate);
    };
  }, []);

  const handleSurvicate = async () => {
    // assume every new attempt at a rating is a new rating
    // or re-rating an existing rating
    window._sva.destroyVisitor();

    const surveyId = (siteConfig.customFields.survicate as any).dqs.surveyId;
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
