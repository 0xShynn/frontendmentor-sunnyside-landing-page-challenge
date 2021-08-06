import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ImageGallery from '../components/ImageGallery';
import Footer from '../components/Footer';
import ClientTestimonialsContainer from '../components/ClientTestimonialsContainer';
import ClientTestimonial from '../components/ClientTestimonial';

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <ClientTestimonialsContainer />
      <ImageGallery />
      <Footer />
    </>
  );
};

export default Home;
