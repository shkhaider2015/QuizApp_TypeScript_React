import { Paper, FormControl, FormLabel, RadioGroup, Radio, FormControlLabel, Button } from '@material-ui/core'
import React from 'react'
type DataType = {
    opt1 : string,
    opt2 : string,
    opt3 : string,
    opt4 : string,
    DATA : {question : string,option1 : string,option2 : string,option3 : string,option4 : string,answer : string}[],
    currentQuestion:number,
    answers: string[],
    handleAnswer: (x:string) => void
}

export const Option = ( {opt1,opt2,opt3,opt4, DATA,answers,currentQuestion, handleAnswer}:DataType ) => {

    const [value, setValue] = React.useState("");
    // const [selected, setSelected] = React.useState('')

    // React.useEffect(
    //     () => {
    //         // if(!value)
    //         // {
    //             console.log(";;;;;; : ", answers[currentQuestion])
    //             setValue(answers[currentQuestion])
    //         // }
    //     },
    //     []
    // )

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue((event.target as HTMLInputElement).value);
        handleAnswer((event.target as HTMLInputElement).value)

        console.log("Answer Options : ", (event.target as HTMLInputElement).value)
    };


    return <FormControl component="fieldset">
                {/* <FormLabel component="legend">Gender</FormLabel> */}
                <RadioGroup aria-label="gender" name="gender1" value={answers[currentQuestion]} onChange={handleChange}>
                    <FormControlLabel value={DATA[currentQuestion].option1} control={<Radio color="primary" />} label={opt1} />
                    <FormControlLabel value={DATA[currentQuestion].option2} control={<Radio color="primary" />} label={opt2} />
                    <FormControlLabel value={DATA[currentQuestion].option3} control={<Radio color="primary" />} label={opt3} />
                    <FormControlLabel value={DATA[currentQuestion].option4} control={<Radio color="primary" />} label={opt4} />
                </RadioGroup>
            </FormControl>
}