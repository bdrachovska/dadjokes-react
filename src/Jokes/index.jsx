import React, { useState } from 'react';
import './style.css';

export const Jokes = (props) => {
  return (
    <>
      {props.jokesList.map((joke) => (
        <Joke
          key={jokes.id}
          img={joke.avatar}
          userName={joke.name}
          text={joke.text}
          likes={joke.likes}
          dislikes={joke.dislikes}
        ></Joke>
      ))}
      ;
    </>
  );
};
