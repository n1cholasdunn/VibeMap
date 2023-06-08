import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

function CategorySearch() {
    return (
        <Autocomplete
            multiple
            id="checkboxes-tags-demo"
            options={categories}
            disableCloseOnSelect
            getOptionLabel={(option) => option.categoryName}
            renderOption={(props, option, { selected }) => (
                <li {...props}>
                    <Checkbox
                        icon={icon}
                        checkedIcon={checkedIcon}
                        style={{ marginRight: 8 }}
                        checked={selected}
                    />
                    {option.categoryName}
                </li>
            )}
            style={{ width: 500 }}
            renderInput={(params) => (
                <TextField {...params} label="Checkboxes" placeholder="Favorites" />
            )}
        />
    );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const categories = [

    { categoryName: 'Architecture' },
    { categoryName: 'History' },
    { categoryName: 'Sports' },
    { categoryName: 'Nature' },
    { categoryName: 'Cuisine' },
    { categoryName: 'Wine' },
    { categoryName: 'Parties' }
]


export default CategorySearch