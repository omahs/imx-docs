import clsx from 'clsx';
import classNames from 'classnames';
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
            <Listbox.Label className="block text-sm font-medium text-gray-700">
              Core SDK
            </Listbox.Label>
            <div className="mt-1 relative">
              <Listbox.Button className={clsx(styles.switcherButton)}> { /* "relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm" */ }
                <span className={clsx(styles.switcherButtonContent)}> { /* "flex items-center" */ }
                  <span className={clsx(styles.switcherButtonText)} > { /* "ml-3 block truncate" */ }
                    {selectedSdk.name}
                  </span>
                </span>
                <span className={clsx(styles.switcherButtonIconGroup)}> { /* "ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none" */ }
                  <SelectorIcon
                    className={clsx(styles.switcherButtonIcon)}
                    aria-hidden="true"
                  /> { /* "h-5 w-5 text-gray-400" */ }
                </span>
              </Listbox.Button>

              <Transition
                show={open}
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                {/* ul */}
                <Listbox.Options className={clsx(styles.switcherList)}> { /* "absolute z-10 mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm" */ }
                  {sdks.map((sdk) => (
                    <Listbox.Option // li
                      key={sdk.id}
                      // className={({ active }) =>
                      //   classNames(
                      //     active ? 'text-white bg-cyan-600' : 'text-gray-900',
                      //     'cursor-default select-none relative py-2 pl-3 pr-9'
                      //   )
                      // }
                      className={clsx(styles.switcherListOption)}
                      value={sdk}
                    >
                      {({ selected, active }) => {
                        console.log(selected);
                        return (
                          // <>
                            <div className={clsx(styles.switcherListOptionContent)}> { /* "flex items-center" */ }
                              <span
                                // className={classNames(
                                //   selected ? 'font-semibold' : 'font-normal',
                                //   'ml-3 block truncate'
                                // )}
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
                                // className={classNames(
                                //   active ? 'text-white' : 'text-indigo-600',
                                //   'absolute inset-y-0 right-0 flex items-center pr-4'
                                // )}
                                className={clsx(styles.switcherListOptionSelected)}
                              >
                                <CheckIcon
                                  className={clsx(styles.switcherListOptionSelectedCheck)}
                                  aria-hidden="true"
                                />{ /* "h-5 w-5" */}
                              </span>
                            ) : null}
                            </div>
                          //{/* </> */}
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
