import React from 'react';
import { ILPTeamProps } from '../../types/LPinterface';
import Image from 'next/image';
import Link from 'next/link';

const members = [
  {
    name: 'Victor Leung',
    imageUrl: 'https://avatars.githubusercontent.com/u/7147135?v=4',
    role: 'Full stack developer',
    githubLink: 'https://github.com/victorleungtw',
  },
  {
    name: 'Jun Xiong',
    imageUrl: 'https://avatars.githubusercontent.com/u/19247856?v=4',
    role: 'Full stack developer',
    githubLink: 'https://github.com/ong6',
  },
  {
    name: 'Marcus Pang',
    imageUrl: 'https://avatars.githubusercontent.com/u/9083891?v=4',
    role: 'Full stack developer',
    githubLink: 'https://github.com/marcuspang',
  },
  {
    name: 'Yongliang',
    imageUrl: 'https://avatars.githubusercontent.com/u/41845017?v=4',
    role: 'Full stack developer',
    githubLink: 'https://github.com/tlylt',
  },
];

const LPTeam: React.FC<ILPTeamProps> = () => {
  return (
    <section className="mx-auto container">
      <div className="container mx-auto px-6 py-10">
        <div className="sm:text-center">
          <h2 className="text-4xl font-semibold leading-snug tracking-tight lg:text-5xl">
            Our Team
          </h2>
          <hr className="mt-4 h-1 w-32 border-none bg-[#0b1840] sm:mx-auto sm:mt-8" />
        </div>
        <p className="mx-auto my-6 max-w-2xl text-center text-lg">
          The BudgetConnect team comprises students from the National University
          of Singapore, with a proven track record of developing innovative
          solutions. Our team brings together expertise in finance, technology,
          and user experience, ensuring that BudgetConnect delivers a seamless
          and intuitive user journey. With our shared passion for empowering
          individuals to achieve financial success, we are confident in our
          ability to drive meaningful change.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 xl:mt-16 xl:grid-cols-4">
          {members.map((member) => {
            return (
              <div
                key={member.name}
                className="group flex transform flex-col items-center rounded-xl border-2 shadow p-8 transition-colors duration-300 hover:border-transparent hover:bg-gray-200 dark:border-gray-700 dark:hover:border-transparent"
              >
                <div className="relative mb-4 h-32 w-32 rounded-full ring-4 ring-gray-300">
                  <Image
                    className="rounded-full"
                    src={member.imageUrl}
                    alt=""
                    width={128}
                    height={128}
                  />
                </div>

                <h3 className="mt-4 text-2xl font-semibold text-gray-700 dark:text-white">
                  {member.name}
                </h3>

                <p className="mt-2 text-gray-500 dark:text-gray-300">
                  {member.role}
                </p>

                <div className="-mx-2 mt-3 flex">
                  <Link
                    href={member.githubLink}
                    className="mx-2 text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-300"
                    aria-label="Github"
                    target="_blank"
                    rel="noopener"
                  >
                    <svg
                      className="h-6 w-6 fill-current"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default LPTeam;
