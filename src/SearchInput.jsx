import React, { useContext } from 'react';
import { ContactContext } from './ContactContext';

const SearchInput = () => {
  const { searchQuery, setSearchQuery } = useContext(ContactContext);

  return (
    <input
      type="text"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      placeholder="Search contacts..."
      className="form-control mb-3"
    />
  );
};

export default SearchInput;
