import { useDispatch, useSelector } from 'react-redux';
import { onChangeFilter } from '../../redux/filter/slice';
import { nanoid } from 'nanoid';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);

  const filterInputId = nanoid();

  const handleFilterChange = event => {
    dispatch(onChangeFilter(event.currentTarget.value));
  };

  return (
    <Box
      sx={{
        width: 500,
        maxWidth: '100%',
        display: `flex`,
        justifyContent: `center`,
        background: ` rgba(255, 255, 255, 0.3)`,
      }}
    >
      <TextField
        fullWidth
        label="Search for contacts"
        type="text"
        name="filter"
        id={filterInputId}
        value={filter}
        onChange={handleFilterChange}
      />
    </Box>
  );
};
