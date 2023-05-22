import React from "react";
import Image from "next/image";
import { ILPSocialProofProps } from "@/types/LPinterface";
const LPSocialProof: React.FC<ILPSocialProofProps> = () => {
  return (
    <section className="0 py-6 sm:py-16 lg:py-20 ">
      <div className="w-full bg-base-300 py-16 shadow-md md:py-32">
        <h2 className="mx-2 text-center text-2xl font-bold tracking-wide md:text-3xl">
          Traction
        </h2>
        <p className="text-center tracking-wide text-lg">
        BudgetConnect has already garnered significant attention and positive feedback during its beta testing phase. Early users have reported improved financial discipline, increased savings rates, and enhanced confidence in their investment decisions. The platform has established partnerships with renowned financial institutions and secured a growing user base, positioning itself as a leader in the personal finance industry.
        </p>
        <hr className="mx-auto mt-4 h-1 w-32 border-0 bg-accent-focus" />

        <div className="container mx-auto flex flex-wrap items-center justify-center space-y-3 py-10">
          <div className="w-40 object-contain px-6">
            <Image
              src="https://img.freepik.com/free-vector/global-corporation-logo_1043-184.jpg?w=740&t=st=1664024531~exp=1664025131~hmac=afbd82e95a102241c1b373b04a5fc0f362705a4d6cdfc67c3efaf97a77a28eec"
              alt="Corporate Inc"
              width={200}
              height={200}
            />
          </div>
          <div className="w-40 px-6">
            <Image
              src="https://img.freepik.com/free-vector/global-corporation-logo_1043-184.jpg?w=740&t=st=1664024531~exp=1664025131~hmac=afbd82e95a102241c1b373b04a5fc0f362705a4d6cdfc67c3efaf97a77a28eec"
              alt="Corporate Inc"
              width={200}
              height={200}
            />
          </div>
          <div className="w-40 px-6">
            <Image
              src="https://img.freepik.com/free-vector/global-corporation-logo_1043-184.jpg?w=740&t=st=1664024531~exp=1664025131~hmac=afbd82e95a102241c1b373b04a5fc0f362705a4d6cdfc67c3efaf97a77a28eec"
              alt="Corporate Inc"
              width={200}
              height={200}
            />
          </div>

        </div>
      </div>

      <div className="mx-auto max-w-2xl px-4 pt-10 sm:px-6  lg:max-w-screen-lg lg:px-8 lg:pt-32">
        <div className="flex flex-col lg:flex-row">
          <div className="relative mx-auto mb-10 flex h-96 overflow-hidden rounded-xl bg-blue-600 shadow sm:mt-20 lg:h-auto lg:max-w-md">
            <Image
              className="absolute top-0 h-full w-full object-cover opacity-10"
              src="https://images.unsplash.com/photo-1551721434-8b94ddff0e6d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80"
              alt="Social Background"
              width={200}
              height={200}
            />
            <div className="relative mt-auto w-full">
              <div className="flex flex-col p-6 lg:px-7 lg:py-8">
                <div className="">
                  <blockquote className="">
                    <p className="text-3xl font-bold text-white sm:text-5xl">
                      &ldquo;Our vision is to empower individuals to build a strong financial foundation, regardless of their current savings and investment habits&ldquo;
                    </p>
                  </blockquote>
                </div>

                <div className="mt-10 flex items-center">
                  <Image
                    className="h-11 w-11 flex-shrink-0 rounded-full object-cover"
                    src="https://avatars.githubusercontent.com/u/7147135?v=4"
                    alt="Avatar"
                    width={44}
                    height={44}
                  />
                  <div className="ml-4 text-white">
                    <p className="text-base font-bold">Victor Leung</p>
                    <p className=" mt-0.5 text-sm">BudgetConnect team</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative mx-auto grid max-w-lg grid-cols-1 gap-y-14 lg:pl-20">
            <div className="flex flex-col">
              <div className="">
                <blockquote className="">
                  <p className="text-lg leading-relaxed">
                    &ldquo;We believe that everyone deserves the opportunity to enjoy the benefits of regular investments&ldquo;
                  </p>
                </blockquote>
              </div>

              <div className="mt-4 flex items-center">
                <Image
                  className="h-11 w-11 flex-shrink-0 rounded-full object-cover"
                  src="https://avatars.githubusercontent.com/u/19247856?v=4"
                  alt="Avatar"
                  width={44}
                  height={44}
                />
                <div className="ml-4">
                  <p className="text-base font-bold">Jun Xiong</p>
                  <p className="mt-0.5 text-sm">BudgetConnect team</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col">
              <div className="">
                <blockquote className="">
                  <p className="text-lg leading-relaxed">
                    &ldquo;We are committed to providing the tools and resources needed to make this a reality. &ldquo;
                  </p>
                </blockquote>
              </div>

              <div className="mt-4 flex items-center">
                <Image
                  className="h-11 w-11 flex-shrink-0 rounded-full object-cover"
                  src="https://avatars.githubusercontent.com/u/9083891?v=4"
                  alt="Avatar"
                  width={44}
                  height={44}
                />
                <div className="ml-4">
                  <p className="text-base font-bold">Marcus Pang</p>
                  <p className=" mt-0.5 text-sm">BudgetConnect team</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col">
              <div className="">
                <blockquote className="">
                  <p className="text-lg leading-relaxed">
                    &ldquo;Our ultimate goal is to revolutionize the way people approach savings and investing, leading to a more financially secure future for all.&ldquo;
                  </p>
                </blockquote>
              </div>

              <div className="mt-4 flex items-center">
                <Image
                  className="h-11 w-11 flex-shrink-0 rounded-full object-cover"
                  src="https://avatars.githubusercontent.com/u/41845017?v=4"
                  alt="Avatar"
                  width={44}
                  height={44}
                />
                <div className="ml-4">
                  <p className="text-base font-bold">Yongliong</p>
                  <p className=" mt-0.5 text-sm">BudgetConnect team</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default LPSocialProof;
