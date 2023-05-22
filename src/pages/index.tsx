"use client";

import Layout from '@/components/Layout/Layout';

import LPFooter from "@/components/LandingPage/LPFooter";
import LPHero from "@/components/LandingPage/LPHero";
import LPFeature from "@/components/LandingPage/LPFeature";
import LPFaq from "@/components/LandingPage/LPFaq";
import LPStats from "@/components/LandingPage/LPStats";
import LPTeam from "@/components/LandingPage/LPTeam";
import LPSocialProof from "@/components/LandingPage/LPSocialProof";

export default function Home() {
  return (
    <Layout>
      <>
      <div>
        <main>
          <LPHero />
          <LPFeature />
          <LPSocialProof />
          {/* <LPBody /> */}
          {/* <LPEnd /> */}
          <LPStats />
          <LPTeam />
          <LPFaq />
        </main>
      </div>
      <LPFooter />
    </>
    </Layout>
  );
}
