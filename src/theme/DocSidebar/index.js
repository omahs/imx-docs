import React from 'react';
import DocSidebar from '@theme-original/DocSidebar';
import SdkSwitcher from '@site/src/components/SdkSwitcher';
import styles from './styles.module.css';

export default function DocSidebarWrapper(props) {
  const isSdkDocsPath = props.path.startsWith('/sdk-docs/') || false;

  return (
    <div className={styles.sidebar}>
      {isSdkDocsPath && <SdkSwitcher />}
      <DocSidebar {...props} />
    </div>
  );
}
