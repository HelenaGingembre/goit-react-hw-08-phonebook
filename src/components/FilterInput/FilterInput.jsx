// import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Input } from './FilterInput.styled';
import { setFilterContact } from '../../redux/filterSlice';
import { selectFilter } from 'redux/selectors';

export const FilterInput = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(selectFilter);
  return (
    <Input
      type="text"
      name="filter"
      placeholder="Enter name for Search Contact"
      value={filterValue}
      onChange={({ target }) => dispatch(setFilterContact(target.value.trim()))}
    />
  );
};

// FilterInput.propTypes = {
//   filter: PropTypes.string.isRequired,
// };
