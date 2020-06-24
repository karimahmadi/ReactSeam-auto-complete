import React from 'react';
import TextField from '@material-ui/core/TextField';
import MuiAutocomplete from '@material-ui/lab/Autocomplete';


export default function AutoComplete(props) {

	const {label, items, valueProp = 'value', labelProp = 'label', onChange, onInputChange, disabled = false, selectedValue, fullWidth = false} = props.option || props;

	let selectedItem = items.filter(item => item[valueProp] === selectedValue);
	if (selectedItem && selectedItem.length > 0)
		selectedItem = selectedItem[0];
	else
		selectedItem = undefined;

	const [value, setValue] = React.useState(selectedItem);

	return (
		<MuiAutocomplete
			options={items}
			getOptionLabel={(option) => option[labelProp]}
			style={{width: 300}}
			renderInput={(params) => <TextField {...params} label={label} variant="standard"/>}
			defaultValue={value}
			onChange={(event, newValue) => {
				onChange && onChange(newValue);
			}}
			onInputChange={(event, newValue) => {
				onInputChange && onInputChange(newValue);
			}}
		/>);
}


