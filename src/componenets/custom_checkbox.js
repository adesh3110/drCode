/* eslint-disable */
import { Checkbox } from '@mui/material';
import { styled } from '@mui/material/styles';

const CustomCheckbox = styled(Checkbox)(({ theme }) => ({
  'color': '#875bf8',
  '&.Mui-checked': {
    color: '#875bf8',
  },
  '&.MuiCheckbox-indeterminate': {
    color: '#875bf8',
  },
  '& .MuiSvgIcon-root': {
    borderRadius: '10px',
  },
}));

export default CustomCheckbox;
