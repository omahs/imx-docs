import clsx from 'clsx';
import React from 'react';
import { History } from 'history';
import { useHistory } from 'react-router';
import { SdkIdKey, SdkItem } from '@site/src/constants';
import Button from '@site/src/components/Button';
import RightArrowIcon from '@site/static/icons/RightArrow';
import ArticleStyles from '@site/src/components/Article/styles.module.css';
import styles from './styles.module.css';

const SdkButtonList = ({ sdks }) => {
  const history: History = useHistory();

  const handleClick = (sdk: SdkItem) => {
    localStorage.setItem(SdkIdKey, JSON.stringify(sdk.id));
    history.push(sdk.url);
  };

  return (
    <div className={clsx(styles.sdkButtonList)}>
      {sdks.map((sdk: SdkItem) => (
        <Button
          key={sdk.id}
          onClick={() => handleClick(sdk)}
          className={clsx(styles.sdkButton)}
        >
          {`${sdk.displayName} `}
          <RightArrowIcon className={ArticleStyles.ctaIcon} />
        </Button>
      ))}
    </div>
  );
};

export default SdkButtonList;
