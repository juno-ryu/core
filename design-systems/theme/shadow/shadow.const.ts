import { Shadows } from '@mui/material';

export const shadow = {
  0: 'none',
  1: '0px 1px 3px 0px rgba(0, 0, 0, 0.12)',
  2: '0px 1px 5px 0px rgba(0, 0, 0, 0.12)',
  3: '0px 1px 8px 0px rgba(0, 0, 0, 0.12)',
  4: '0px 1px 10px 0px rgba(0, 0, 0, 0.12)',
  5: '0px 1px 14px 0px rgba(0, 0, 0, 0.12)',
  6: '0px 1px 18px 0px rgba(0, 0, 0, 0.12)',
  7: '0px 2px 16px 1px rgba(0, 0, 0, 0.12)',
  8: '0px 3px 14px 2px rgba(0, 0, 0, 0.12)',
  9: '0px 3px 16px 2px rgba(0, 0, 0, 0.12)',
  10: '0px 4px 18px 3px rgba(0, 0, 0, 0.12)',
  11: '0px 4px 20px 3px rgba(0, 0, 0, 0.12)',
  12: '0px 5px 22px 4px rgba(0, 0, 0, 0.12)',
  13: '0px 5px 24px 4px rgba(0, 0, 0, 0.12)',
  14: '0px 5px 26px 4px rgba(0, 0, 0, 0.12)',
  15: '0px 6px 28px 5px rgba(0, 0, 0, 0.12)',
  16: '0px 6px 30px 5px rgba(0, 0, 0, 0.12)',
  17: '0px 6px 32px 5px rgba(0, 0, 0, 0.12)',
  18: '0px 7px 34px 6px rgba(0, 0, 0, 0.12)',
  19: '0px 7px 36px 6px rgba(0, 0, 0, 0.12)',
  20: '0px 8px 38px 7px rgba(0, 0, 0, 0.12)',
  21: '0px 8px 40px 7px rgba(0, 0, 0, 0.12)',
  22: '0px 8px 42px 7px rgba(0, 0, 0, 0.12)',
  23: '0px 9px 44px 8px rgba(0, 0, 0, 0.12)',
  24: '0px 9px 46px 8px rgba(0, 0, 0, 0.12)',
};

export const shadows = Object.entries(shadow)
  .sort(([a], [b]) => Number(a) - Number(b))
  .map(([_, value]) => value) as Shadows;
