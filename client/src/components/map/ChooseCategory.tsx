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
  const handleCategories = (event: any, value: Category[]) => {
    //put any for now because event is not being used
    console.log('category changed');
    console.log('value ==> ', value);
    setSelectedCategories(value);
  };
  useEffect(() => {
    // console.log(handleCategories())
    console.log('categoy sel:', selectedCategories);
    console.log(selectedCategories);
  }, [selectedCategories]);

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
