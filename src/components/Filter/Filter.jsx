import { HiOutlineSearch } from 'react-icons/hi';
import { Input, LabelDescr } from './Filter.styled';
import { LabelWrapper } from 'components/ContactForm/ContactForm.styled';
import { useDispatch } from 'react-redux';

import { setFilter } from 'redux/filterSlice';

export const FilterContacts = () => {
  const dispatch = useDispatch();

  const onChangeFilter = event => {
    dispatch(setFilter(event.target.value));
  };
  return (
    <LabelDescr>
      <LabelWrapper>
        <HiOutlineSearch size="16" />
        Find contacts by name
      </LabelWrapper>
      <Input
        type="text"
        name="filter"
        placeholder="Enter contact name"
        onChange={onChangeFilter}
      />
    </LabelDescr>
  );
};
