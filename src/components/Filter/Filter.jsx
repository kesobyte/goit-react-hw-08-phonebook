import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/filter/filterSlice';
import { selectFilter } from '../../redux/selectors';
import { DebounceInput } from 'react-debounce-input';
import { InputGroup, InputLeftElement, Input, Stack } from '@chakra-ui/react';
import { FaSearch } from 'react-icons/fa';
import css from './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleFilterChange = e => {
    dispatch(setFilter(e.target.value.trim()));
  };

  return (
    <Stack spacing={4}>
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <FaSearch color="gray" />
        </InputLeftElement>
        <DebounceInput
          element={Input}
          type="text"
          name="filter"
          placeholder="Search by name"
          value={filter}
          onChange={handleFilterChange}
          debounceTimeout={500}
          className={css.searchBox}
          focusBorderColor="#5046e5"
        />
      </InputGroup>
    </Stack>
  );
};
