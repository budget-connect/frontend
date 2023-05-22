import React from 'react';
import { ILPStatsProps } from '../../types/LPinterface';

const LPStats: React.FC<ILPStatsProps> = () => {
  return (
    <section className="bg-base-300 py-12 sm:py-16 lg:py-20 container mx-auto">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="sm:text-center">
          <h2 className="text-4xl font-semibold leading-snug tracking-tight lg:text-5xl">
            Market Potential
          </h2>
          <hr className="mt-4 h-1 w-32 border-none bg-[#0b1840] sm:mx-auto sm:mt-8" />
        </div>

        <div className="mx-auto mt-20 grid max-w-screen-xl grid-cols-1  gap-x-8 gap-y-12 text-center sm:grid-cols-3 sm:text-left lg:gap-0">
          <div className="relative mb-3 text-left lg:px-12">
            <div className="absolute left-3 -top-4 h-16 w-16 rounded-full bg-accent-focus"></div>
            <p className="relative m-0 text-2xl font-semibold md:text-4xl lg:text-5xl">
              25%
            </p>
            <p className="relative mt-5 text-lg">
              of population acknowledges the importance of investing but
              struggles to develop consistent savings habits.{' '}
            </p>
          </div>

          <div className="relative mb-3 text-left lg:px-12">
            <div className="absolute left-3 -top-4 h-16 w-16 rounded-full bg-accent-focus"></div>
            <div className="absolute bottom-0 left-0 hidden h-16 w-px lg:block"></div>
            <p className="relative m-0 text-2xl font-semibold md:text-4xl lg:text-5xl">
              67%
            </p>
            <p className="relative mt-5 text-lg">
              growing interest in personal finance management and increasing
              digital adoption
            </p>
          </div>

          <div className="relative mb-3 text-left lg:px-12">
            <div className="absolute left-3 -top-4 h-16 w-16 rounded-full bg-accent-focus"></div>
            <div className="absolute bottom-0 left-0 hidden h-16 w-px lg:block"></div>
            <p className="relative m-0 text-2xl font-semibold md:text-4xl lg:text-5xl">
              $3 billion
            </p>
            <p className="relative mt-5 text-lg">market segment to tap into</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LPStats;
