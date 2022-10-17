import PropTypes from 'prop-types';

import { Input } from './FilterInput.styled';

export const FilterInput = ({ filter, onChange }) => {
  return (
    <Input
      type="text"
      name="filter"
      placeholder="Enter name for Search Contact"
      value={filter}
      onChange={({ target }) => onChange(target.value)}
    />
  );
};

FilterInput.propTypes = {
  filter: PropTypes.string.isRequired,
};
