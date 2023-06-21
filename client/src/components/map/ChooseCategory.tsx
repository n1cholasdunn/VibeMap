import { categories } from '../../helpers/category';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { useEffect } from 'react';
import React from 'react';
import { Category, CategorySearchProps } from '../../helpers/category';

const icon = <CheckBoxOutlineBlankIcon fontSize='small' />;
const checkedIcon = <CheckBoxIcon fontSize='small' />;

const CategorySearch: React.FC<CategorySearchProps> = ({
  setSelectedCategories,
  selectedCategories,
}) => {
  const handleCategories = (
    event: React.FormEvent<EventTarget>,
    value: Category[]
  ) => {
    setSelectedCategories(value);
  };
  useEffect(() => {}, [selectedCategories]);

  return (
    <Autocomplete
      multiple
      options={categories}
      disableCloseOnSelect
      getOptionLabel={(option) => option.categoryName}
      renderOption={(props, option, { selected }) => (
        <li {...props}>
          <Checkbox
            icon={icon}
            checkedIcon={checkedIcon}
            style={{ marginRight: 8 }}
            className='z-0 '
            checked={selected}
          />
          {option.categoryName}
        </li>
      )}
      style={{ width: 500 }}
      value={selectedCategories}
      onChange={handleCategories}
      renderInput={(params) => (
        <TextField
          {...params}
          label='Your vibe is...'
          placeholder='Interests'
        />
      )}
    />
  );
};

export default CategorySearch;
