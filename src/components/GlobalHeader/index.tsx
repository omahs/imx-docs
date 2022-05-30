import React from 'react';
import styles from './styles.module.css';
import OIcon from '@site/static/icons/HeaderO';
import XIcon from '@site/static/icons/HeaderX';
import StudioIcon from '@site/static/icons/Studio';
import clsx from 'clsx';

const GlobalHeader = () => {
  return (
    <header className={styles.headerSection}>
      <div className={styles.headerContainer}>
        <div className={styles.iconsContainer}>
          <OIcon />
          <XIcon />
          <StudioIcon />
        </div>
        <div className={styles.linksContainer}>
          <a
            href="https://www.immutable.com/careers"
            className={clsx(styles.headerLink, 'hyperlink')}
          >
            Careers
          </a>
          <a
            href="https://twitter.com/immutable/"
            className={clsx(styles.headerLink, 'hyperlink')}
          >
            Twitter
          </a>
          <a
            href="https://discord.com/invite/Dmhp398dna"
            className={clsx(styles.headerLink, 'hyperlink')}
          >
            Discord
          </a>
        </div>
      </div>
    </header>
  );
};

export default GlobalHeader;
