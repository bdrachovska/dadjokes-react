import React from 'react';
const Joke = () => {
  const [likes, setLikes] = useState(0);
  const handleLikes = () => {
    setLikes(likes + 1);
  };
  const [dislikes, setDisLikes] = useState(0);
  const handleDisLikes = () => {
    setDisLikes(dislikes + 1);
  };

  return (
    <div className="container">
      <div className="joke">
        <div class="joke__body">
          <div class="joke__user">
            <img class="user-avatar" src={joke.avatar} />
            <p class="user-name">{joke.name}</p>
          </div>

          <p class="joke__text">{joke.text}</p>
        </div>
        <div class="joke__likes">
          <button id="btn-up" class="btn-like btn-like--up"></button>
          <span id="likes-up" class="likes-count likes-count--up">
            {joke.likes}
          </span>
          <button id="btn-down" class="btn-like btn-like--down"></button>
          <span id="likes-down" class="likes-count likes-count--down">
            {joke.dislikes}
          </span>
        </div>
      </div>
    </div>
  );
};
