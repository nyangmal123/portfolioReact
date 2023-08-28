import { atom } from 'recoil';

export const scrollTop = atom({
  key: 'scrollTop',
  default: false,
});

export const darkmode = atom({
  key: 'darkmode',
  default: false,
});

export const scrollRef = atom({
  key: 'scrollRef',
  default: [
    { idx: 0, name: 'home' },
    { idx: 1, name: 'introduce' },
    { idx: 2, name: 'project' },
  ],
});
