import clsx from 'clsx';
import React, { Fragment, useState } from 'react';
import { useHistory } from 'react-router';
import BrowserOnly from '@docusaurus/BrowserOnly';
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

const classNames = (...classes: string[]): string => {
  return classes.filter(Boolean).join(' ');
};

const getSdkId = (sdkList: SdkList): number => {
  const localId = parseInt(localStorage.getItem(SDK_ID_KEY)) || 0;

  if (localId > sdkList.length - 1) {
    return 0;
  }
  return localId;
};

const SdkSwitcher = () => {
  const history = useHistory();
  const sdkId = getSdkId(sdks);
  const [selectedSdk, setSelectedSdk] = useState(sdks[sdkId]);

  const onSelect = (value) => {
    localStorage.setItem(SDK_ID_KEY, value.id);
    setSelectedSdk(value);
    history.push(value.url);
  };

  return (
    <BrowserOnly>
      {() => (
        <div className={clsx(styles.sdkSwitcher)}>
          <Listbox value={selectedSdk} onChange={onSelect}>
            {({ open }) => (
              <>
                <Listbox.Label className="block text-sm font-medium text-gray-700">
                  Core SDK
                </Listbox.Label>
                <div className="mt-1 relative">
                  <Listbox.Button className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm">
                    <span className="flex items-center">
                      <span className="ml-3 block truncate">
                        {selectedSdk.name}
                      </span>
                    </span>
                    <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                      <SelectorIcon
                        className="h-5 w-5 text-gray-400"
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
                    <Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                      {sdks.map((sdk) => (
                        <Listbox.Option
                          key={sdk.id}
                          className={({ active }) =>
                            classNames(
                              active
                                ? 'text-white bg-cyan-600'
                                : 'text-gray-900',
                              'cursor-default select-none relative py-2 pl-3 pr-9'
                            )
                          }
                          value={sdk}
                        >
                          {({ selected, active }) => {
                            return (
                              <>
                                <div className="flex items-center">
                                  <span
                                    className={classNames(
                                      selected
                                        ? 'font-semibold'
                                        : 'font-normal',
                                      'ml-3 block truncate'
                                    )}
                                  >
                                    {sdk.name}
                                  </span>
                                </div>

                                {selected ? (
                                  <span
                                    className={classNames(
                                      active ? 'text-white' : 'text-indigo-600',
                                      'absolute inset-y-0 right-0 flex items-center pr-4'
                                    )}
                                  >
                                    <CheckIcon
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  </span>
                                ) : null}
                              </>
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
      )}
    </BrowserOnly>
  );
};

export default SdkSwitcher;
