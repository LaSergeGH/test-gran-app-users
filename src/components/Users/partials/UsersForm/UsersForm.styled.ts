import { styled, TextField } from '@mui/material';

export const StyledNumberTextField = styled(TextField)({
  // '& [class*="MuiOutlinedInput-input"]': {
  //   width: '2ch',
  //   padding: 0,
  //   borderRadius: 0,
  //   background: 'unset',
  // },
  '& input::-webkit-outer-spin-button': {
    WebkitAppearance: 'none',
  },
  '& input::-webkit-inner-spin-button': {
    WebkitAppearance: 'none',
  },
});
