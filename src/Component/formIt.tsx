import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import TextField from '@mui/material/TextField';

import Container from '@mui/material/Container';
import { Grid, Box, Button } from '@mui/material';


const formIt = () => {
    const [count, setCount] = useState<any[]>([]);
    const [message, setMessage] = useState('');

    const handleClick = () => {
        setCount([]);
       getStepsByVal(message);
       console.log(count)
    };



    const getStepsByVal = (value: any) => {
        if (value > 0) {
            const val: number = parseInt(value) - 1;
            if (val) {
   
                    if (value === 1) {
                        getStepsByVal(val-1);
                        count.push(val-1);
                    }
                    if (val > 2) {
                       
                            count.push((val-2));
                            getStepsByVal(val-2);
                      
                    }
           


            }
        }
    }



    useEffect(() => {
        // Update the document title using the browser API


    });

    return (
        <React.Fragment>
            <Container>
                <Grid container direction="row"
                    justifyContent="center"
                    alignItems="center"
                    spacing={4}>
                    <Box key="TextField"> <TextField label="Outlined" variant="outlined" value={message} type="text" name="numbers" id="numbers" onChange={(e) => { setMessage(e.target.value) }} /></Box>
                    <Box key="Button"> <Button variant="contained" onClick={handleClick}>Hit Me!</Button></Box>
                </Grid>

                <Box>
                    {count.map((item, index) => {
                        return (
                            <>
                                 <span key={item}>{item.item}</span>
                            </>
                        )
                    })}
                </Box>
            </Container>
        </React.Fragment>
    );
}

export default formIt;