import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ImageGallery from '../components/ImageGallery';
import Footer from '../components/Footer';
import ClientTestimonialsContainer from '../components/ClientTestimonialsContainer';
import { Box } from '@chakra-ui/react';
import MainContainer from '../components/MainContainer';

const Home = () => {
  return (
    <>
      <Header />
      <Box role="main">
        <Hero />
        <MainContainer />
        <ClientTestimonialsContainer />
        <ImageGallery />
      </Box>
      <Footer />
    </>
  );
};

export default Home;
