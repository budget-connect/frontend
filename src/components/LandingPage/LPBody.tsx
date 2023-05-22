import React from 'react';
import { ILPBodyProps } from '../../types/LPinterface';
import LPBodyItem from './LPBodyItem';

const LPBody: React.FC<ILPBodyProps> = () => {
  return (
    <section className="grid justify-items-center px-4 py-12 md:py-32 lg:px-20">
      <div className="grid min-h-screen w-full max-w-screen-xl">
        <div className="grid lg:grid-cols-2 lg:gap-10 lg:gap-y-32">
          <h2 className="h-fit pb-14 text-4xl font-semibold lg:col-span-2 lg:text-6xl ">
            We do it all.
          </h2>
          <LPBodyItem
            heading="Purchase guarantee."
            imgSrc="https://i.postimg.cc/mZFsrnbZ/i-Phone-13-Pro.png"
            num={'01.'}
            textOne=""
            textTwo=""
          />
        </div>
      </div>
    </section>
  );
};
export default LPBody;
