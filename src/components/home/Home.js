import React from 'react';
import HeroPage from '../hero/HeroPage';
import Header from '../header/Header';

const Home = ({movies}) => {
  return (
    <>
      <Header />
      <HeroPage movies={movies} />
    </>
  )
}

export default Home
