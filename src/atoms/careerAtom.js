import { atom } from 'recoil';

export const percentages = atom({
  key: 'percentages',
  default: {
    govtPercent: 0,
    mgmtPercent: 0,
    lawPercent: 0,
    defPercent: 0,
    medPercent: 0,
    engPercent: 0,
  },
});
