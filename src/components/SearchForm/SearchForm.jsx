import { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import PropTypes from 'prop-types';
import { alertOnEmptyQuery } from 'services';
import { Form, Input, Button } from './SearchForm.styled';

export const SearchForm = ({ onSubmit }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = e => setSearchQuery(e.currentTarget.value);

  const handleSubmit = e => {
    e.preventDefault();
    if (searchQuery.trim() === '') return alertOnEmptyQuery();
    onSubmit(searchQuery);
    setSearchQuery([])
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Button type="submit">
        <BsSearch size={24} />
      </Button>
      <Input
        type="text"
        autocomplete="off"
        autoFocus
        placeholder="Filter by name..."
        value={searchQuery}
        onChange={handleChange}
      />
    </Form>
  );
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
