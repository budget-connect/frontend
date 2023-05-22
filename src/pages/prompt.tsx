import type { NextPage } from 'next';
import { useRef, useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import DropDown from '../components/DropDown';
import LoadingDots from '../components/LoadingDots';
import Layout from '@/components/Layout/Layout';

const sampleFoodBudget = `In order to control our expenses and meet our financial goals, we have allocated a fixed monthly budget for food. The budget plan is designed to cover all our grocery needs as well as eating out expenses. The following is our estimated monthly food budget breakdown:\n\nGrocery Budget: $500\n\nWe have allocated $500 for our monthly grocery expenses. This budget will cover the cost of all necessary grocery items like vegetables, fruits, meat, dairy products, bread, and other household essentials like cleaning supplies and toiletries.\n\nEating Out Budget: $150\n\nWe have allocated $150 for eating out expenses. This budget will cover occasional dinners out or takeouts from restaurants.\n\nTotal Monthly Food Budget: $650`;

const Home: NextPage = () => {
  const [loading, setLoading] = useState(false);
  const [userInput, setUserInput] = useState('');
  const [section, setSection] = useState<string>('Food');
  const [generatedPlan, setGeneratedPlan] = useState('');
  const [monthlyIncome, setMonthlyIncome] = useState('3000');

  const [userLocation, setUserLocation] = useState('Singapore');

  const bioRef = useRef<null | HTMLDivElement>(null);

  const scrollToBios = () => {
    if (bioRef.current !== null) {
      bioRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // const prompt2 = `Generate 2 ${section} twitter biographies with no hashtags and clearly labeled "1." and "2.". ${
  //   section === 'Funny'
  //     ? "Make sure there is a joke in there and it's a little ridiculous."
  //     : null
  // }
  //     Make sure each generated biography is less than 160 characters, has short sentences that are found in Twitter bios, and base them on this context: ${userInput}${
  //   userInput.slice(-1) === '.' ? '' : '.'
  // }`;

  const prompt = `You are an expert budget planner of 20 years of experience. Your task is to review and modify an existing monthly budget. Take note of the following when giving your output: monthly income is ${monthlyIncome}, location is ${userLocation}, category is ${section}. Provide a response starting with and clearly labeled "1." and "2.": 1. A quality rating out of 10, and point out whether the budget exceeds the monthly income and provide advice to improve, and 2. A modified budget of the section that aligns with recommended standards. Let's think step by step. The current budget section: ${userInput}`;

  const generatePlan = async (e: any) => {
    e.preventDefault();
    setGeneratedPlan('');
    setLoading(true);
    if (!monthlyIncome) {
      toast.error('Please input your monthly income');
      return;
    }
    const response = await fetch('/api/ai', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        prompt,
      }),
    });

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    // This data is a ReadableStream
    const data = response.body;
    if (!data) {
      return;
    }

    const reader = data.getReader();
    const decoder = new TextDecoder();
    let done = false;

    while (!done) {
      const { value, done: doneReading } = await reader.read();
      done = doneReading;
      const chunkValue = decoder.decode(value);
      setGeneratedPlan((prev) => prev + chunkValue);
    }
    scrollToBios();
    setLoading(false);
  };

  return (
    <Layout>
      <div className="mx-auto flex w-full flex-col items-center justify-center py-2">
        <main className="flex w-full flex-1 flex-col items-center justify-center px-4 text-center sm:mt-2 sm:flex-row sm:gap-8">
          <div className="sm:w-1/2">
            <h1 className="max-w-[708px] text-base font-bold text-slate-900 sm:text-xl">
              Get help on your budget using GPT
            </h1>
            <div className="w-full max-w-xl">
              <div className="mb-5 flex items-center space-x-3">
                <p className="text-left font-medium">1. Input Monthly Income</p>
              </div>
              <div className="block">
                <input
                  value={monthlyIncome}
                  onChange={(e) => setMonthlyIncome(e.target.value)}
                  type="number"
                  className="w-full"
                  required
                />
              </div>
              <div className="mt-2 flex items-center space-x-3">
                <p className="text-left font-medium">2. Set Location</p>
              </div>
              <textarea
                value={userLocation}
                onChange={(e) => setUserLocation(e.target.value)}
                rows={1}
                className="my-5 w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black"
                placeholder={userLocation}
              />
              <div className="mb-5 flex items-center space-x-3">
                <p className="text-left font-medium">3. Select Section</p>
              </div>
              <div className="block">
                <DropDown
                  category={section}
                  setCategory={(newCategory) => setSection(newCategory)}
                />
              </div>
              <div className="mt-2 flex items-center space-x-3">
                <p className="text-left font-medium">
                  4. Input Budget Plan{' '}
                  <span className="text-slate-500">(just one category)</span>
                </p>
              </div>
              <textarea
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                rows={15}
                className="my-5 w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black"
                placeholder={sampleFoodBudget}
              />

              {!loading && (
                <button
                  className="mt-8 w-full rounded-xl bg-black px-4 py-2 font-medium text-white hover:bg-black/80 sm:mt-10"
                  onClick={(e) => generatePlan(e)}
                >
                  Go &rarr;
                </button>
              )}
              {loading && (
                <button
                  className="mt-8 w-full rounded-xl bg-black px-4 py-2 font-medium text-white hover:bg-black/80 sm:mt-10"
                  disabled
                >
                  <LoadingDots color="white" style="large" />
                </button>
              )}
            </div>
            <Toaster
              position="top-center"
              reverseOrder={false}
              toastOptions={{ duration: 2000 }}
            />
          </div>
          <div className="sm:w-1/2">
            <hr className="h-px border bg-gray-700 dark:bg-gray-700" />
            <div className="my-20 space-y-10">
              {generatedPlan && (
                <>
                  <div>
                    <h2
                      className="mx-auto text-3xl font-bold text-slate-900 sm:text-4xl"
                      ref={bioRef}
                    >
                      Result
                    </h2>
                  </div>
                  <div className="mx-auto flex max-w-xl flex-col items-center justify-center space-y-8">
                    {generatedPlan.indexOf('1.') === -1 ? (
                      <div
                        className="cursor-copy rounded-xl border bg-white p-4 text-left shadow-md transition hover:bg-gray-100"
                        onClick={() => {
                          navigator.clipboard.writeText(generatedPlan);
                          toast('copied to clipboard', {
                            icon: '✂️',
                          });
                        }}
                      >
                        <div
                          dangerouslySetInnerHTML={{
                            __html: generatedPlan.replace(/\n/g, '<br>'),
                          }}
                        />
                      </div>
                    ) : (
                      generatedPlan
                        .substring(generatedPlan.indexOf('1') + 3)
                        .split('2.')
                        .map((generatedBio) => {
                          return (
                            <div
                              className="cursor-copy rounded-xl border bg-white p-4 text-left shadow-md transition hover:bg-gray-100"
                              onClick={() => {
                                navigator.clipboard.writeText(generatedBio);
                                toast('copied to clipboard', {
                                  icon: '✂️',
                                });
                              }}
                              key={generatedBio}
                            >
                              <div
                                dangerouslySetInnerHTML={{
                                  __html: generatedBio.replace(/\n/g, '<br>'),
                                }}
                              />
                            </div>
                          );
                        })
                    )}
                  </div>
                </>
              )}
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
};

export default Home;
