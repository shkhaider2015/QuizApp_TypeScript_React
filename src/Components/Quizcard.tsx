import { Button, Paper } from '@material-ui/core'
import React from 'react'
import { Option } from './Option'
import DATA from "../Data/data.json";

interface myProps  {
    answers : Array<string>
}

export const Quizcard = () => {

    const [currentQuestion, setCurrentQuestion] = React.useState(0);
    const [answers, setAnswers] = React.useState<Array<string>>([]);

    const handleCurrentQuestion = (x:number) => {
        let nextQuestion : number ;
        if(x === 1)
        {
            nextQuestion = currentQuestion + 1;
        }
        else
        {
            nextQuestion = currentQuestion - 1;
        }
        setCurrentQuestion(nextQuestion);
    }
    const handleAnswer = (x:string) => {
        // setAnswers(x)
    }

    if(currentQuestion > (DATA.length - 1) )
    {
        return <Paper style={{ width: '40%', height : '40%' }} >
            <div style={{ display : 'grid', placeItems : 'center' }} >
                <h3> Done </h3>
            </div>
        </Paper>
    }
    else
    {

        return (<Paper style={{ width: '40%', padding: 20 }} >
        <div style={{ display: 'grid', placeItems: 'center' }} >
            <h3> {DATA[currentQuestion].question} </h3>
        </div>

        <Option
         opt1={DATA[currentQuestion].option1}
         opt2={DATA[currentQuestion].option2} 
         opt3={DATA[currentQuestion].option3} 
         opt4={DATA[currentQuestion].option4}
         handleAnswer={handleAnswer}
         />

        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }} >
            <Button 
                style={{ marginRight: 8 }} 
                variant="contained" 
                color="primary" 
                onClick={() => handleCurrentQuestion(0)} 
                disabled={currentQuestion === 0}  >Back</Button>

            <Button 
                style={{ marginLeft: 8 }} 
                variant="contained" 
                color="primary" 
                onClick={() => handleCurrentQuestion(1)}  > {currentQuestion !== (DATA.length - 1) ? "Next" : "Submit"} </Button>
            </div>
        </Paper>)
    }
}