import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import DocSidebar from '@theme-original/DocSidebar';
import SdkSwitcher from '@site/src/components/SdkSwitcher';
import styles from './styles.module.css';

interface SidebarProps {
  path: string;
}

const DocSidebarWrapper = (props: SidebarProps) => {
  const isSdkDocsPath = props.path.startsWith('/sdk-docs/') || false;

  return (
    <BrowserOnly>
      {() => (
        <div className={styles.sidebarWrapper} id="sidebar-wrapper">
          {isSdkDocsPath && <SdkSwitcher />}
          <DocSidebar {...props} />
        </div>
      )}
    </BrowserOnly>
  );
};

export default DocSidebarWrapper;
