import { Paper, FormControl, FormLabel, RadioGroup, Radio, FormControlLabel } from '@material-ui/core'
import React from 'react'


export const Option = () => {

    const [value, setValue] = React.useState();

    const handleChange = () =>
    {

    }


    return <FormControl component="fieldset">
        <FormLabel component="legend">Gender</FormLabel>
        <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
            <FormControlLabel value="female" control={<Radio />} label="Female" />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
            <FormControlLabel value="disabled" disabled control={<Radio />} label="(Disabled option)" />
        </RadioGroup>
    </FormControl>
}