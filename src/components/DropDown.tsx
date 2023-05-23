import { Menu, Transition } from '@headlessui/react';
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from '@heroicons/react/20/solid';
import { Fragment } from 'react';
import { EVENT_CATEGORIES } from '@/data/events';
import { twMerge } from 'tailwind-merge';

interface DropDownProps {
  category: string;
  setCategory: (category: string) => void;
}

let categories: string[] = EVENT_CATEGORIES;

export default function DropDown({ category, setCategory }: DropDownProps) {
  return (
    <Menu as="div" className="relative block w-full pt-2 text-left">
      <div>
        <Menu.Button className="inline-flex w-full items-center justify-between rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-black">
          {category}
          <ChevronUpIcon
            className="ui-open:hidden -mr-1 ml-2 h-5 w-5"
            aria-hidden="true"
          />
          <ChevronDownIcon
            className="ui-open:block -mr-1 ml-2 hidden h-5 w-5"
            aria-hidden="true"
          />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          className="absolute left-0 z-10 mt-2 w-full origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          key={category}
        >
          <div>
            {categories.map((categoryItem) => (
              <Menu.Item key={categoryItem}>
                {({ active }) => (
                  <button
                    onClick={() => setCategory(categoryItem)}
                    className={twMerge(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      category === categoryItem ? 'bg-gray-200' : '',
                      'px-4 py-2 text-sm w-full text-left flex items-center space-x-2 justify-between'
                    )}
                  >
                    <span>{categoryItem}</span>
                    {category === categoryItem ? (
                      <CheckIcon className="h-4 w-4 font-bold" />
                    ) : null}
                  </button>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
