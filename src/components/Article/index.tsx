import RightArrowIcon from '@site/static/icons/RightArrow';
import React, { ReactNode } from 'react';
import styles from './styles.module.css';
import { useColorMode } from '@docusaurus/theme-common';
import clsx from 'clsx';

interface Cta {
  link: string;
  text: string;
}
interface ArticleProps {
  LightIcon?: ({ className }: { className?: string }) => JSX.Element;
  DarkIcon?: ({ className }: { className?: string }) => JSX.Element;
  title: string | ReactNode;
  subtitle: string | ReactNode;
  cta: Cta[];
}

const Article = ({
  title,
  subtitle,
  cta,
  LightIcon,
  DarkIcon,
}: ArticleProps) => {
  const theme = useColorMode();

  return (
    <div
      className={clsx(
        styles.articleContainer,
        theme.colorMode === 'light' ? 'card-light-04' : ''
      )}
    >
      <div className={styles.contentSection}>
        {LightIcon && theme.colorMode === 'light' && (
          <LightIcon className={styles.image} />
        )}
        {DarkIcon && theme.colorMode === 'dark' && (
          <DarkIcon className={styles.image} />
        )}
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
      <div className={styles.ctaSection}>
        {cta.map((c, index) => {
          return (
            <a href={c.link} key={index}>
              <div className={styles.ctaContainer} key={index}>
                <RightArrowIcon className={styles.ctaIcon} />
                <p className={styles.ctaTitle}>{c.text}</p>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Article;
