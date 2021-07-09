import React, {useEffect, useState} from 'react'
import { Itable } from '../../../types/index'
import { makeStyles, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core/';
import * as api from '../../../api'
import {scorersApi} from '../../../types/scorersTypes'


interface IProps {
    data: Itable[];
    country: string| null | undefined;
}

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

export default function Index(props: IProps) {

    const classes = useStyles();
    const data = props.data;
    const country: string|undefined = props.country?.toString();
    const [scorers, setScorers] =useState<[] | scorersApi[] >([])

    useEffect(() => {
        const fetchGoalScorers = (country: string|undefined) => {
            if (typeof country === 'string') {
              return api.getGoalScorers(country)
            .then((res) => {
                setScorers(res.scorers)
            })  
            }
        }
        fetchGoalScorers(country)
    },[country])

    return (
        <>
        <TableContainer component={Paper}>
            <Typography variant='h4' style={{textAlign:'center'}}>Top Scorers</Typography>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell >Name</TableCell>
                        <TableCell style={{textAlign: 'center'}} >Club</TableCell>
                        <TableCell style={{textAlign: 'center'}}>Goals Scored</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {scorers.map((item) => (
                        <TableRow key={item.player.id}>
                            <TableCell style={{padding: '18.5px'}}>{item.player.name}</TableCell>
                            <TableCell style={{textAlign: 'center'}}>{item.team.name}</TableCell>
                            <TableCell style={{textAlign: 'center'}}>{item.numberOfGoals}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    </>
    );
}
