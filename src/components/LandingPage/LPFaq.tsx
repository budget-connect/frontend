import Link from 'next/link';
import React from 'react';
import { ILPFaqProps } from '../../types/LPinterface';
import { Button } from '../Button';

const LPFaq: React.FC<ILPFaqProps> = () => {
  return (
    <section className="mx-auto container">
      <div className="relative mx-auto w-full py-16 px-5 font-sans sm:px-20 md:max-w-screen-lg lg:py-24">
        <h2 className="mb-5 text-center text-4xl font-semibold leading-snug tracking-tight lg:text-5xl">
          Frequently Asked Questions
        </h2>
        <p className="mb-12 text-center text-lg text-gray-500">
          We have written down answers to some of the frequently asked
          questions. but, if you still have any queries, feel free to ping us.
        </p>
        <ul className="space-y-4">
          <li className="text-left">
            <label
              htmlFor="accordion-1"
              className="relative flex flex-col rounded-md border border-gray-100 shadow-md"
            >
              <input className="peer hidden" type="checkbox" id="accordion-1" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute right-0 top-4 ml-auto mr-5 h-4 text-gray-500 transition peer-checked:rotate-180"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
              <div className="relative ml-4 cursor-pointer select-none items-center py-4 pr-2">
                <h3 className="text-sm lg:text-base ">
                  What is Budget Conncet problem statement?
                </h3>
              </div>
              <div className="max-h-0 overflow-hidden transition-all duration-500 peer-checked:max-h-96">
                <div className="p-5">
                  <p className="text-sm">
                    In today fast-paced world, it is easy to overlook the
                    significance of savings and investing. Individuals often
                    leave substantial funds in low-yield accounts, missing out
                    on potential returns. Furthermore, some individuals lack the
                    knowledge and guidance to make informed investment
                    decisions, exposing themselves to unnecessary risks.
                  </p>
                </div>
              </div>
            </label>
          </li>

          <li className="text-left">
            <label
              htmlFor="accordion-2"
              className="relative flex flex-col rounded-md border border-gray-100 shadow-md"
            >
              <input className="peer hidden" type="checkbox" id="accordion-2" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute right-0 top-4 ml-auto mr-5 h-4 text-gray-500 transition peer-checked:rotate-180"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
              <div className="relative ml-4 cursor-pointer select-none items-center py-4 pr-2">
                <h3 className="text-sm lg:text-base ">
                  What is BudgetConnect Business Model?
                </h3>
              </div>
              <div className="max-h-0 overflow-hidden transition-all duration-500 peer-checked:max-h-96">
                <div className="p-5">
                  <p className="text-sm">
                    BudgetConnect operates on a subscription-based model,
                    offering users different tiers of access based on their
                    needs and preferences. The platform also collaborates with
                    trusted financial institutions to provide seamless
                    integration with existing bank accounts and investment
                    platforms. By offering a range of value-added services, such
                    as educational resources and personalized financial
                    coaching, BudgetConnect creates multiple revenue streams
                    while delivering exceptional value to its users.
                  </p>
                </div>
              </div>
            </label>
          </li>

          <li className="text-left">
            <label
              htmlFor="accordion-3"
              className="relative flex flex-col rounded-md border border-gray-100 shadow-md"
            >
              <input className="peer hidden" type="checkbox" id="accordion-3" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute right-0 top-4 ml-auto mr-5 h-4 text-gray-500 transition peer-checked:rotate-180"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
              <div className="relative ml-4 cursor-pointer select-none items-center py-4 pr-2">
                <h3 className="text-sm lg:text-base ">
                  What are Budget Connect competitions?
                </h3>
              </div>
              <div className="max-h-0 overflow-hidden transition-all duration-500 peer-checked:max-h-96">
                <div className="p-5">
                  <p className="text-sm">
                    While there are existing financial management apps in the
                    market, BudgetConnect stands out with its specific focus on
                    cultivating healthy savings and investing habits. Our unique
                    combination of advanced technology, personalized guidance,
                    and user-friendly interfaces sets us apart from traditional
                    budgeting apps or investment platforms. By providing a
                    comprehensive solution that addresses the root causes of
                    poor savings and investing habits, BudgetConnect establishes
                    a competitive edge.
                  </p>
                </div>
              </div>
            </label>
          </li>

          <li className="text-left">
            <label
              htmlFor="accordion-4"
              className="relative flex flex-col rounded-md border border-gray-100 shadow-md"
            >
              <input className="peer hidden" type="checkbox" id="accordion-4" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute right-0 top-4 ml-auto mr-5 h-4 text-gray-500 transition peer-checked:rotate-180"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
              <div className="relative ml-4 cursor-pointer select-none items-center py-4 pr-2">
                <h3 className="border-indigo-600 text-sm lg:text-base ">
                  What is BudgetConnect?
                </h3>
              </div>
              <div className="max-h-0 overflow-hidden transition-all duration-500 peer-checked:max-h-96">
                <div className="p-5">
                  <p className="text-sm">
                    BudgetConnect is the digital solution that individuals need
                    to develop healthy savings and investing habits. By
                    leveraging technology, expert guidance, and personalized
                    features, BudgetConnect breaks down the barriers to
                    financial success, enabling users to make informed decisions
                    and build a secure future. Join us on this transformative
                    journey towards a world where everyone can enjoy the
                    benefits of easy savings.
                  </p>
                </div>
              </div>
            </label>
          </li>
        </ul>
        <div className="mt-20 flex justify-center">
          <Link href="https://github.com/budget-connect/frontend">
            <Button>Still have questions?</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
export default LPFaq;
