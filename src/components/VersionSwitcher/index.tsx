/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import {
  useVersions,
  useActiveDocContext,
  // @ts-ignore eslint-ignore
} from '@docusaurus/plugin-content-docs/client';
import { useDocsPreferredVersion } from '@docusaurus/theme-common';
// @ts-ignore
import { useDocsVersionCandidates } from '@docusaurus/theme-common/internal';
import { translate } from '@docusaurus/Translate';
import DefaultNavbarItem from '@theme/NavbarItem/DefaultNavbarItem';
import DropdownNavbarItem from '@theme/NavbarItem/DropdownNavbarItem';
import styles from './styles.module.css';

interface VersionSwitcherProps {
  mobile: false;
  docsPluginId: string;
}

const getVersionMainDoc = (version) =>
  version.docs.find((doc) => doc.id === version.mainDocId);

const VersionSwitcher = ({
  mobile = false,
  docsPluginId,
  // dropdownActiveClassDisabled,
  // dropdownItemsBefore,
  // dropdownItemsAfter,
  ...props
}: VersionSwitcherProps) => {
  const activeDocContext = useActiveDocContext(docsPluginId);
  console.log(activeDocContext);
  const versions = useVersions(docsPluginId);
  const { savePreferredVersionName } = useDocsPreferredVersion(docsPluginId);
  const versionLinks = versions.map((version) => {
    // We try to link to the same doc, in another version
    // When not possible, fallback to the "main doc" of the version
    const versionDoc =
      activeDocContext.alternateDocVersions[version.name] ??
      getVersionMainDoc(version);
    return {
      label: version.label,
      to: versionDoc.path,
      isActive: () => version === activeDocContext.activeVersion,
      onClick: () => savePreferredVersionName(version.name),
    };
  });
  const items = [
    // ...dropdownItemsBefore,
    ...versionLinks,
    // ...dropdownItemsAfter,
  ];
  const dropdownVersion = useDocsVersionCandidates(docsPluginId)[0];
  // Mobile dropdown is handled a bit differently
  const dropdownLabel =
    mobile && items.length > 1
      ? translate({
          id: 'theme.navbar.mobileVersionsDropdown.label',
          message: 'Versions',
          description:
            'The label for the navbar versions dropdown on mobile view',
        })
      : dropdownVersion.label;
  const dropdownTo =
    mobile && items.length > 1
      ? undefined
      : getVersionMainDoc(dropdownVersion).path;

  // Don't display the version switcher when only Next version available
  if (items[0].label === 'Next') {
    return null;
  }
  // We don't want to render a version dropdown with 0 or 1 item. If we build
  // the site with a single docs version (onlyIncludeVersions: ['1.0.0']),
  // We'd rather render a button instead of a dropdown
  if (items.length <= 1) {
    return (
      <DefaultNavbarItem
        {...props}
        mobile={mobile}
        label={dropdownLabel}
        to={dropdownTo}
        className={styles.dropdown}
        // isActive={dropdownActiveClassDisabled ? () => false : undefined}
      />
    );
  }
  return (
    <DropdownNavbarItem
      {...props}
      mobile={mobile}
      label={dropdownLabel}
      to={dropdownTo}
      items={items}
      className={styles.dropdown}
      // isActive={dropdownActiveClassDisabled ? () => false : undefined}
    />
  );
};

export default VersionSwitcher;
