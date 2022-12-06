import { useDispatch, useSelector } from 'react-redux';
import { onChangeFilter } from '../../redux/filter/slice';
import { nanoid } from 'nanoid';
import { Boks, Text, Label, Input } from './filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);

  const filterInputId = nanoid();

  const handleFilterChange = event => {
    dispatch(onChangeFilter(event.currentTarget.value));
  };

  return (
    <Boks>
      <Label htmlFor={filterInputId}>
        <Text>Search for contacts</Text>
        <Input
          placeholder="Search for contacts"
          type="text"
          name="filter"
          id={filterInputId}
          value={filter}
          onChange={handleFilterChange}
        />
      </Label>
    </Boks>
  );
};
