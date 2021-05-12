import { Button, Paper } from '@material-ui/core'
import React from 'react'
import { Option } from './Option'


export const Quizcard = () => {
    return (<Paper style={{ width: '40%', padding: 20 }} >
        <div style={{ display: 'grid', placeItems: 'center' }} >
            <h3>What is your name</h3>
        </div>

        <Option />
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }} >
            <Button style={{ marginRight: 8 }} variant="contained" color="primary" >Back</Button>
            <Button style={{ marginLeft: 8 }} variant="contained" color="primary" >Next</Button>
        </div>
    </Paper>)
}