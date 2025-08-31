import React from 'react';
import PageLayout from '../components/Layout/PageLayout';
import Hero from '../components/Home/Hero';
import LatestPapers from '../components/Home/LatestPapers';
import JournalStats from '../components/Home/JournalStats';
import Disciplines from '../components/Home/typesofscope';
import Resources from '../components/Home/Resources';
import CallToAction from '../components/Home/CallToAction';
import LogoSection from '../components/Layout/LogoSection';
import { MOCK_PAPERS } from '../data/mockData';

const HomePage: React.FC = () => {
  return (
    <PageLayout withPadding={false}>
      <Hero />
      <LatestPapers papers={MOCK_PAPERS} />
      <JournalStats />
      <Disciplines />
      <Resources />
      <CallToAction />
    </PageLayout>
  );
};

export default HomePage;