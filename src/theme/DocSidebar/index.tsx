import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import DocSidebar from '@theme-original/DocSidebar';
import SdkSwitcher from '@site/src/components/SdkSwitcher';
import { coreSDKs, walletSDKs } from '@site/src/constants';
import styles from './styles.module.css';

interface SidebarProps {
  path: string;
}

const DocSidebarWrapper = (props: SidebarProps) => {
  const isSdkDocsPath = props.path.startsWith('/sdk-docs/') || false;
  const sdks = coreSDKs.concat(walletSDKs);

  return (
    <BrowserOnly>
      {() => (
        <div className={styles.sidebar} id="sidebar-wrapper">
          {isSdkDocsPath && <SdkSwitcher sdks={sdks} />}
          <DocSidebar {...props} />
        </div>
      )}
    </BrowserOnly>
  );
};

export default DocSidebarWrapper;
