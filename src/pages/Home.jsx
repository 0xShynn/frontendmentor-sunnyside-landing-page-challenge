import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ImageGallery from '../components/ImageGallery';
import Footer from '../components/Footer';
import ClientTestimonialsContainer from '../components/ClientTestimonialsContainer';
import { Box } from '@chakra-ui/react';

const Home = () => {
  return (
    <>
      <Header />
      <Box role="main">
        <Hero />
        <ClientTestimonialsContainer />
        <ImageGallery />
      </Box>
      <Footer />
    </>
  );
};

export default Home;
