import type { NextPage } from 'next';
import { useRef, useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import DropDown from '../components/DropDown';
import LoadingDots from '../components/LoadingDots';
import Layout from '@/components/Layout/Layout';

const sampleFoodBudget = `I'm planning a birthday party for my son. Right now I'm thinking of catering food for 20 people. I also need a venue`;

const Home: NextPage = () => {
  const [loading, setLoading] = useState(false);
  const [userInput, setUserInput] = useState('');
  const [section, setSection] = useState<string>('Birthday Parties');
  const [generatedPlan, setGeneratedPlan] = useState('');
  const [totalBudget, setTotalBudget] = useState('1000');

  const [userLocation, setUserLocation] = useState('Singapore');

  const bioRef = useRef<null | HTMLDivElement>(null);

  const scrollToBios = () => {
    if (bioRef.current !== null) {
      bioRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const prompt = `Take note that total budget is ${totalBudget}, location is ${userLocation}, event type is ${section}. Rest of the context:${userInput}`;

  const generatePlan = async (e: any) => {
    e.preventDefault();
    setGeneratedPlan('');
    setLoading(true);
    if (!totalBudget) {
      toast.error('Please input your total budget');
      setLoading(false);
      return;
    }
    if (!userInput) {
      toast.error('Please input some event details or questions');
      setLoading(false);
      return;
    }
    const response = await fetch('/api/prompt', {
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
      <div className="flex flex-col items-center justify-center w-full py-2 mx-auto">
        <div className="flex flex-col items-center justify-center flex-1 w-full px-4 text-center sm:mt-10 sm:flex-row sm:items-start sm:gap-8 lg:w-4/5 xl:w-1/2">
          <div className="sm:w-1/2">
            <h1 className="mx-auto max-w-[708px] text-3xl text-slate-900">
              Get help on your event budget👋
            </h1>
            <div className="w-full max-w-xl mt-4">
              <div className="flex items-center mb-5 space-x-3">
                <p className="font-medium text-left">1. Input Total Budget</p>
              </div>
              <div className="block">
                <input
                  value={totalBudget}
                  onChange={(e) => setTotalBudget(e.target.value)}
                  type="number"
                  className="w-full"
                  required
                />
              </div>
              <div className="flex items-center mt-2 space-x-3">
                <p className="font-medium text-left">2. Set Location</p>
              </div>
              <textarea
                value={userLocation}
                onChange={(e) => setUserLocation(e.target.value)}
                rows={1}
                className="w-full my-5 border-gray-300 rounded-md shadow-sm focus:border-black focus:ring-black"
                placeholder={userLocation}
              />
              <div className="flex items-center mb-5 space-x-3">
                <p className="font-medium text-left">3. Select Event Type</p>
              </div>
              <div className="block">
                <DropDown
                  category={section}
                  setCategory={(newCategory) => setSection(newCategory)}
                />
              </div>
              <div className="flex items-center mt-2 space-x-3">
                <p className="font-medium text-left">
                  4. Event Details{' '}
                  <span className="text-slate-500">
                    (or ask your questions!)
                  </span>
                </p>
              </div>
              <textarea
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                rows={15}
                className="w-full my-5 border-gray-300 rounded-md shadow-sm focus:border-black focus:ring-black"
                placeholder={sampleFoodBudget}
              />

              {!loading && (
                <button
                  className="w-full px-4 py-2 mt-8 font-medium text-white bg-green-400 rounded-xl hover:bg-green-600 sm:mt-10"
                  onClick={(e) => generatePlan(e)}
                >
                  Go &rarr;
                </button>
              )}
              {loading && (
                <button
                  className="w-full px-4 py-2 mt-8 font-medium text-white bg-green-400 rounded-xl hover:bg-green-600 sm:mt-10"
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
            {/* <hr className="h-px bg-gray-700 border dark:bg-gray-700" /> */}
            <div className="space-y-10">
              {generatedPlan && (
                <>
                  <div>
                    <h2
                      className="mx-auto text-3xl text-slate-900"
                      ref={bioRef}
                    >
                      Answer🙌
                    </h2>
                  </div>
                  <div className="flex flex-col items-center justify-center max-w-xl mx-auto space-y-8">
                    <div className="p-4 text-left transition bg-white border shadow-md rounded-xl hover:bg-gray-100">
                      <div
                        dangerouslySetInnerHTML={{
                          __html: generatedPlan.replace(/\n/g, '<br>'),
                        }}
                      />
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
