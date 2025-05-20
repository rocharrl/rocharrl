
import React from 'react';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { CloudTypes } from '@/components/CloudTypes';
import { Advantages } from '@/components/Advantages';
import { DHISection } from '@/components/DHISection';
import { ContractTypes } from '@/components/ContractTypes';
import { Pillars } from '@/components/Pillars';
import { Podcast } from '@/components/Podcast';
import { InstitutionalSection } from '@/components/InstitutionalSection';
import { ContactForm } from '@/components/ContactForm';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <CloudTypes />
        <Advantages />
        <DHISection />
        <ContractTypes />
        <Pillars />
        <Podcast />
        <InstitutionalSection />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
