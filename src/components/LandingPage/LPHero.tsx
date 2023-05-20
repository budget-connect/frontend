import NextLink from "next/link";
import React from "react";
import { ILPHeroProps } from "../../types/LPinterface";
import { Button } from "../Button";
import { HeroImage } from "../../assets/images/hero-image";
const LPHero: React.FC<ILPHeroProps> = () => {
  return (
    <section>
      <div className="">
        <div className="mx-auto h-full px-4 py-10 sm:max-w-xl md:max-w-full md:px-24 md:py-24 lg:max-w-screen-xl lg:px-8">
          <div className="flex flex-col items-center justify-between lg:flex-row">
            <div className="">
              <div className="lg:max-w-3xl lg:pr-5">
                <h2 className="mb-6 max-w-2xl text-3xl font-semibold leading-snug tracking-tight md:text-7xl">
                  Transforming Savings and Investing Habits
                </h2>
                <p className="text-base ">
                  Did you know that despite acknowledging the importance of investing, many people struggle with developing healthy savings and investment habits? Imagine a digital solution that empowers consumers to overcome investment inertia, avoid risky strategies, and enjoy the benefits of regular investments.
                </p>
              </div>
              <div className="mt-10 flex flex-col items-center md:flex-row">
                <NextLink href="/api/auth/signin" passHref>
                  <div>
                    <Button direction="left-0" inset="inset-y-0">
                      Get Started 
                    </Button>
                  </div>
                </NextLink>
              </div>
            </div>
            <div className="relative hidden lg:ml-32 lg:block lg:w-1/2">
              <HeroImage strokeColor="fill-accent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default LPHero;
