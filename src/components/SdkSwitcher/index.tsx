import clsx from 'clsx';
import React, { Fragment, useState } from 'react';
import { History } from 'history';
import { useHistory } from 'react-router';
import { Listbox, Transition } from '@headlessui/react';
import { SelectorIcon } from '@heroicons/react/solid';
import VersionSwitcher from '@site/src/components/VersionSwitcher';
import styles from './styles.module.css';
import { SdkIdKey, SdkItem, SdkList } from '@site/src/constants';

const getSdkId = (sdkList: SdkList): number => {
  const localId = parseInt(localStorage.getItem(SdkIdKey)) || 0;

  if (localId > sdkList.length - 1) {
    return 0;
  }
  return localId;
};

const SdkSwitcher = ({ sdks }) => {
  const history: History = useHistory();
  const sdkId = getSdkId(sdks);
  const [selectedSdk, setSelectedSdk] = useState<SdkItem>(sdks[sdkId]);

  const handleOnChange = (sdkItem: SdkItem) => {
    localStorage.setItem(SdkIdKey, sdkItem.id.toString());
    setSelectedSdk(sdkItem);
    history.push(sdkItem.url);
  };

  return (
    <>
      <div className={clsx(styles.switcherLabel)}>Core SDK</div>
      <div className={clsx(styles.sdkSwitcher)}>
        <Listbox value={selectedSdk} onChange={handleOnChange}>
          {({ open }) => (
            <>
              <div>
                <Listbox.Button className={clsx(styles.switcherButton)}>
                  <span className={clsx(styles.switcherButtonContent)}>
                    <span className={clsx(styles.switcherButtonText)}>
                      {selectedSdk.name}
                    </span>
                  </span>
                  <span className={clsx(styles.switcherButtonIconGroup)}>
                    <SelectorIcon
                      className={clsx(styles.switcherButtonIcon)}
                      aria-hidden="true"
                    />
                  </span>
                </Listbox.Button>

                <Transition
                  show={open}
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options className={clsx(styles.switcherList)}>
                    {sdks.map((sdk) => (
                      <Listbox.Option
                        key={sdk.id}
                        className={clsx(styles.switcherListOption)}
                        value={sdk}
                      >
                        {({ selected, active }) => {
                          const activeStyles = clsx(
                            styles.switcherListOptionContent,
                            styles.switcherListOptionActive
                          );
                          const defaultStyle = clsx(
                            styles.switcherListOptionContent
                          );

                          return (
                            <div
                              className={active ? activeStyles : defaultStyle}
                            >
                              <span
                                className={
                                  selected
                                    ? clsx(
                                        styles.switcherListOptionTextSelected
                                      )
                                    : clsx(styles.switcherListOptionText)
                                }
                              >
                                {sdk.name}
                              </span>{' '}
                            </div>
                          );
                        }}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
              <VersionSwitcher
                mobile={false}
                docsPluginId={selectedSdk.sdkId}
              />
            </>
          )}
        </Listbox>
      </div>
    </>
  );
};

export default SdkSwitcher;
