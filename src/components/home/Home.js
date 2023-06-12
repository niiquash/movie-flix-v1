import React from 'react';
import HeroPage from '../hero/HeroPage';

const Home = ({movies}) => {
  return (
    <HeroPage movies={movies} />
  )
}

export default Home
