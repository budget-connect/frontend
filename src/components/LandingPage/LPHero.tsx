import React from 'react';
import { ILPHeroProps } from '../../types/LPinterface';
import { HeroImage } from '../../assets/images/hero-image';
import { useRouter } from 'next/router';
import { Button } from 'flowbite-react';

const LPHero: React.FC<ILPHeroProps> = () => {
  const router = useRouter();
  return (
    <section>
      <div>
        <div className="container mx-auto h-full py-10 md:py-24">
          <div className="flex flex-col items-center justify-between lg:flex-row">
            <div>
              <div className="lg:max-w-3xl lg:pr-5">
                <h2 className="mb-6 max-w-2xl text-3xl font-semibold leading-snug tracking-tight md:text-5xl lg:text-6xl">
                  Transforming Savings and Investing Habits
                </h2>
                <p className="text-lg">
                  Did you know that despite acknowledging the importance of
                  investing, many people struggle with developing healthy
                  savings and investment habits? Imagine a digital solution that
                  empowers consumers to overcome investment inertia, avoid risky
                  strategies, and enjoy the benefits of regular investments.
                </p>
              </div>
              <div className="mt-10 flex flex-col items-center md:flex-row">
                <Button
                  onClick={() => router.push('/api/auth/signin')}
                  color="dark"
                  size="lg"
                >
                  Get Started
                </Button>
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
