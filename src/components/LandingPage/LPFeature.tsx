import React from "react";
import { ILPFeatureProps } from "../../types/LPinterface";
import { FeatureImage } from "../../assets/images/feature-image";
const LPFeature: React.FC<ILPFeatureProps> = () => {
  return (
    <>
      <section className="mx-auto mt-24 flex max-w-lg flex-col px-4 py-10 lg:max-w-screen-xl lg:flex-row">
        <div className="relative hidden lg:mx-16 lg:flex lg:w-1/2">
          <FeatureImage strokeColor="fill-accent" />
        </div>
        <div className="">
          <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-accent-focus text-white shadow-lg shadow-indigo-600/20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 01-1.125-1.125v-3.75zM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-8.25zM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-2.25z"
              />
            </svg>
          </div>
          <h2 className="mb-10 max-w-lg text-4xl font-semibold leading-snug lg:text-5xl lg:leading-snug">
            A revolutionary solution to help you develop healthy savings and investing habits
          </h2>
          <div className="grid gap-y-12 gap-x-8 lg:grid-cols-2">
            <div>
              <p className="text-lg">
              BudgetConnect combines cutting-edge technology, user-friendly interfaces, and expert financial guidance to empower individuals to take control of their financial futures.
              </p>
            </div>
            <div>
              <p className="text-lg">
              With BudgetConnect, users can set personalized savings goals and track their progress effortlessly. The platform provides valuable insights and recommendations, enabling users to make informed decisions based on their risk appetite and investment objectives.
              </p>
            </div>
            <div>
              <p className="text-lg">
              Whether it's saving for a down payment, retirement, or a dream vacation, BudgetConnect ensures that every dollar works smarter and harder.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default LPFeature;
