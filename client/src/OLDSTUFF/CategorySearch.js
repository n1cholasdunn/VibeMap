// import Checkbox from '@mui/material/Checkbox';
// import TextField from '@mui/material/TextField';
// import Autocomplete from '@mui/material/Autocomplete';
// import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
// import CheckBoxIcon from '@mui/icons-material/CheckBox';
// import { useEffect } from 'react';

// const icon = <CheckBoxOutlineBlankIcon fontSize='small' />;
// const checkedIcon = <CheckBoxIcon fontSize='small' />;

// const CategorySearch = ({ setSelectedCategories, selectedCategories }) => {

//   const handleCategories = (event, value) => {
//     console.log('category changed');
//     console.log('value ==> ', value);
//     setSelectedCategories(value);
//   };
//   useEffect(() => {
//     console.log(handleCategories())
//     console.log('categoy sel:', selectedCategories);
//   }, [selectedCategories]);

//   return (
//     <Autocomplete
//       multiple
//       options={categories}
//       disableCloseOnSelect
//       getOptionLabel={(option) => option.categoryName}
//       renderOption={(props, option, { selected }) => (
//         <li {...props}>
//           <Checkbox
//             icon={icon}
//             checkedIcon={checkedIcon}
//             style={{ marginRight: 8 }}
//             className='z-0 '
//             checked={selected}
//           />
//           {option.categoryName}
//         </li>
//       )}
//       style={{ width: 500 }}
//       value={selectedCategories}
//       onChange={handleCategories}
//       renderInput={(params) => (
//         <TextField
//           {...params}
//           label='Your vibe is...'
//           placeholder='Interests'
//         />
//       )}
//     />
//   );
// };

// const categories = [
//   { categoryName: 'Adventure' },
//   { categoryName: 'Architecture' },
//   { categoryName: 'Art' },
//   { categoryName: 'Beaches' },
//   { categoryName: 'Cuisine' },
//   { categoryName: 'History' },
//   { categoryName: 'Nature' },
//   { categoryName: 'Nightlife' },
//   { categoryName: 'Parties' },
//   { categoryName: 'Relaxation' },
//   { categoryName: 'Shopping' },
//   { categoryName: 'Sports' },
//   { categoryName: 'Wine' },
//   { categoryName: 'Wildlife' },
// ];

// export default CategorySearch;
