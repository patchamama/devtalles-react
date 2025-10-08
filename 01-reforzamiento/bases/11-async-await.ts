import type { GiphyRandomResponse, Gif } from '../data/giphy.response';

const API_KEY = 'EOkVlTm41v1dJn3aFYvY4GQyrNGHH6RH';

const createImageInsideDOM = (url: string) => {
  const imgElement = document.createElement('img');
  imgElement.src = url;

  document.body.append(imgElement);
};

const getRandomGifUrl = async (): Promise<string> => {
  const response = await fetch(
    `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
  );

  const { data }: GiphyRandomResponse = await response.json();

  return data.images.original.url;
};

getRandomGifUrl().then(createImageInsideDOM);
