import React, { useState } from 'react';
import { render } from 'react-dom';
import { Jokes } from './Jokes';
import { Joke } from './Joke';
import { jokesList } from './JokesList';
import './style.css';

const App = () => {
  const [jokesList, setJokesList] = useState([]);
  return (
    <div className="container">
      <div className="joke">
        <Joke />
        <Jokes jokesList={jokesList} />
      </div>
    </div>
  );
};

render(<App />, document.querySelector('#app'));
