import type { NextPage } from 'next';
import { useRef, useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import LoadingDots from '../components/LoadingDots';
import Layout from '@/components/Layout/Layout';
import { Button, Label, Select, TextInput, Textarea } from 'flowbite-react';
import { EVENT_CATEGORIES } from '@/data/events';
import { ArrowRightIcon } from '@heroicons/react/20/solid';

const sampleFoodBudget = `I'm planning a birthday party for my son. Right now I'm thinking of catering food for 20 people. I also need a venue.`;

const Home: NextPage = () => {
  const [isLoading, setIsLoading] = useState(false);
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
    setIsLoading(true);
    if (!totalBudget) {
      toast.error('Please input your total budget');
      setIsLoading(false);
      return;
    }
    if (!userInput) {
      toast.error('Please input some event details or questions');
      setIsLoading(false);
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
    setIsLoading(false);
  };

  return (
    <Layout>
      <div className="container mx-auto flex flex-col items-center justify-center pb-12">
        <div className="flex w-full flex-1 flex-col items-center justify-center px-10 text-center sm:mt-10 sm:flex-row sm:items-start sm:gap-8">
          <div className="">
            <h1 className="mx-auto text-3xl font-semibold leading-snug tracking-tight lg:text-4xl">
              Get help on your event budget 👋
            </h1>
            <div className="mt-4 w-full space-y-4 text-left">
              <div>
                <Label htmlFor="total-budget" className="text-lg">
                  1. Input Total Budget
                </Label>
                <TextInput
                  id="total-budget"
                  value={totalBudget}
                  onChange={(e) => setTotalBudget(e.target.value)}
                  type="number"
                  required
                  className="pt-2"
                />
              </div>
              <div>
                <Label htmlFor="location" className="text-lg">
                  2. Set Location
                </Label>
                <TextInput
                  id="location"
                  value={userLocation}
                  onChange={(e) => setUserLocation(e.target.value)}
                  className="pt-2"
                  type="text"
                  placeholder={userLocation}
                  required
                />
              </div>
              <div>
                <Label htmlFor="event" className="text-lg">
                  3. Select Event Type
                </Label>
                <Select
                  id="event"
                  required
                  className="pt-2"
                  value={section}
                  onChange={(e) => {
                    setSection(e.target.value);
                  }}
                >
                  {EVENT_CATEGORIES.map((category) => (
                    <option key={category}>{category}</option>
                  ))}
                </Select>
              </div>
              <div>
                <Label htmlFor="details" className="text-lg">
                  4. Event Details{' '}
                  <span className="text-slate-500">
                    (or ask your questions!)
                  </span>
                </Label>
                <Textarea
                  id="details"
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  rows={15}
                  className="mt-2 text-sm"
                  placeholder={sampleFoodBudget}
                  required
                />
              </div>

              {isLoading ? (
                <Button
                  color="success"
                  className="mt-4 w-full sm:mt-6"
                  disabled
                >
                  <LoadingDots color="white" style="large" />
                </Button>
              ) : (
                <Button
                  color="success"
                  className="mt-4 w-full sm:mt-6"
                  onClick={(e) => generatePlan(e)}
                >
                  Go <ArrowRightIcon className="h-5 w-5 pt-1" />
                </Button>
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
                      className="mx-auto text-3xl font-semibold leading-snug tracking-tight lg:text-4xl"
                      ref={bioRef}
                    >
                      Answer 🙌
                    </h2>
                  </div>
                  <div className="mx-auto flex flex-col items-center justify-center space-y-8">
                    <div className="rounded-xl border bg-white p-4 text-left shadow-md transition hover:bg-gray-100">
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
