// const SERVER_URI = 'http://localhost:4000';

const SERVER_URI = 'https://busy-heathered-boar.glitch.me';

export const fetchData = async () => {
  const res = (await fetch(SERVER_URI)).json();
  return res;
};
