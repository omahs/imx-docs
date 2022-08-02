import clsx from 'clsx';
import React, { Fragment, useState } from 'react';
import { History } from 'history';
import { useHistory } from 'react-router';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid';
import styles from './styles.module.css';
import { sdks } from '@site/src/constants';

interface SdkItem {
  id: number;
  name: string;
  url: string;
}
interface SdkList extends Array<SdkItem> {}

const SDK_ID_KEY = 'imx-docs-core-sdk-id';

const getSdkId = (sdkList: SdkList): number => {
  const localId = parseInt(localStorage.getItem(SDK_ID_KEY)) || 0;

  if (localId > sdkList.length - 1) {
    return 0;
  }
  return localId;
};

const SdkSwitcher = () => {
  const history: History = useHistory();
  const sdkId = getSdkId(sdks);
  const [selectedSdk, setSelectedSdk] = useState<SdkItem>(sdks[sdkId]);

  const handleOnChange = (sdkItem: SdkItem) => {
    localStorage.setItem(SDK_ID_KEY, sdkItem.id.toString());
    setSelectedSdk(sdkItem);
    history.push(sdkItem.url);
  };

  return (
    <div className={clsx(styles.sdkSwitcher)}>
      <Listbox value={selectedSdk} onChange={handleOnChange}>
        {({ open }) => (
          <>
            <Listbox.Label className={clsx(styles.switcherLabel)}>
              Core SDK
            </Listbox.Label>
            <div className="mt-1 relative">
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
                        const checkActive = clsx(
                          styles.switcherListOptionSelected,
                          styles.switcherListOptionSelectedActive
                        );
                        const defaultCheck = clsx(
                          styles.switcherListOptionSelected
                        );

                        return (
                          <div className={active ? activeStyles : defaultStyle}>
                            <span
                              className={
                                selected
                                  ? clsx(styles.switcherListOptionTextSelected)
                                  : clsx(styles.switcherListOptionText)
                              }
                            >
                              {sdk.name}
                            </span>

                            {selected ? (
                              <span
                                className={active ? checkActive : defaultCheck}
                              >
                                <CheckIcon
                                  className={clsx(
                                    styles.switcherListOptionSelectedCheck
                                  )}
                                  aria-hidden="true"
                                />
                              </span>
                            ) : null}
                          </div>
                        );
                      }}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </>
        )}
      </Listbox>
    </div>
  );
};

export default SdkSwitcher;
