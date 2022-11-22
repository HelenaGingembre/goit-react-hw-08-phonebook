// import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Input } from './FilterInput.styled';
import { filterContact } from '../../redux/filterSlice';
import { getFilter } from 'redux/selectors';

export const FilterInput = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(getFilter);
  return (
    <Input
      type="text"
      name="filter"
      placeholder="Enter name for Search Contact"
      // value={filter}
      // onChange={({ target }) => onChange(target.value.trim())}
      value={filterValue}
      onChange={e => dispatch(filterContact(e.target.value))}
    />
  );
};

// FilterInput.propTypes = {
//   filter: PropTypes.string.isRequired,
// };
