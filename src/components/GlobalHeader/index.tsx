import React from 'react';
import styles from './styles.module.css';
import iconStyles from '../../../src/components/Footer/styles.module.css';
import OIcon from '@site/static/icons/HeaderO';
import XIcon from '@site/static/icons/HeaderX';
import clsx from 'clsx';

const GlobalHeader = () => {
  return (
    <header className={styles.headerSection}>
      <div className={styles.headerContainer}>
        <div className={styles.iconsContainer}>
          <div onClick={() => window.open('https://immutable.com/company', '_blank')} style={{ cursor: 'pointer' }}>
            <OIcon />
          </div>
          <div onClick={() => window.open('https://docs.x.immutable.com', '_blank')} style={{ cursor: 'pointer' }}>
            <XIcon />
          </div>
          <div style={{ display: 'block' }}>
            <button
              onClick={() =>
                window.open('https://immutable.com/games-studio', '_blank')
              }
              className={clsx(iconStyles.socialIcons, iconStyles.studioIcon)}
            />
          </div>
        </div>
        <div className={styles.linksContainer}>
          <a
            href="https://www.immutable.com/careers"
            target="_blank"
            className={clsx(styles.headerLink, 'hyperlink')}
            rel="noreferrer"
          >
            Careers
          </a>
          <a
            href="https://twitter.com/immutable/"
            target="_blank"
            className={clsx(styles.headerLink, 'hyperlink')}
            rel="noreferrer"
          >
            Twitter
          </a>
          <a
            href="https://discord.com/invite/Dmhp398dna"
            target="_blank"
            className={clsx(styles.headerLink, 'hyperlink')}
            rel="noreferrer"
          >
            Discord
          </a>
        </div>
      </div>
    </header>
  );
};

export default GlobalHeader;
