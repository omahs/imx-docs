import React from 'react';
import DocSidebar from '@theme-original/DocSidebar';
import SdkSwitcher from '@site/src/components/SdkSwitcher';
import styles from './styles.module.css';

interface SidebarProps {
  path: string;
}

const DocSidebarWrapper = (props: SidebarProps) => {
  const isSdkDocsPath = props.path.startsWith('/sdk-docs/') || false;

  return (
    <div className={styles.sidebar}>
      {isSdkDocsPath && <SdkSwitcher />}
      <DocSidebar {...props} />
    </div>
  );
};

export default DocSidebarWrapper;
