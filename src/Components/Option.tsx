import { Paper, FormControl, FormLabel, RadioGroup, Radio, FormControlLabel, Button } from '@material-ui/core'
import React from 'react'


export const Option = () => {

    const [value, setValue] = React.useState("");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue((event.target as HTMLInputElement).value);
    };


    return <FormControl component="fieldset">
                <FormLabel component="legend">Gender</FormLabel>
                <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                    <FormControlLabel value="female" control={<Radio color="primary" />} label="Female" />
                    <FormControlLabel value="male" control={<Radio color="primary" />} label="Male" />
                    <FormControlLabel value="other" control={<Radio color="primary" />} label="Other" />
                    <FormControlLabel value="disabled" disabled control={<Radio />} label="(Disabled option)" />
                </RadioGroup>
            </FormControl>
}