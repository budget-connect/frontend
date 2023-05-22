import React from 'react';
import { ILPFeatureProps } from '../../types/LPinterface';
import { FeatureImage } from '../../assets/images/feature-image';

const LPFeatures: React.FC<ILPFeatureProps> = () => {
  return (
    <section className="mx-auto flex flex-col py-10 lg:flex-row lg:space-x-4 container">
      <div className="relative hidden lg:flex lg:flex-[33.3%]">
        <FeatureImage strokeColor="fill-accent" />
      </div>
      <div className="lg:flex-[66.7%]">
        <h2 className="mb-10 text-4xl font-semibold leading-snug tracking-tight lg:text-5xl">
          A revolutionary solution that helps you develop healthy savings and
          investing habits
        </h2>
        <div className="grid gap-y-12 gap-x-8 lg:grid-cols-2">
          <div>
            <p className="text-lg">
              BudgetConnect combines cutting-edge technology, user-friendly
              interfaces, and expert financial guidance to empower individuals
              to take control of their financial futures.
            </p>
          </div>
          <div>
            <p className="text-lg">
              With BudgetConnect, users can set personalized savings goals and
              track their progress effortlessly. The platform provides valuable
              insights and recommendations, enabling users to make informed
              decisions based on their risk appetite and investment objectives.
            </p>
          </div>
          <div>
            <p className="text-lg">
              Whether it is saving for a down payment, retirement, or a dream
              vacation, BudgetConnect ensures that every dollar works smarter
              and harder.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default LPFeatures;
