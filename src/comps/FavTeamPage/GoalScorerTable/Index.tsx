import React, { useEffect, useState } from 'react'
import { Itable } from '../../../types/index'
import { makeStyles, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core/';
import * as api from '../../../api'
import { scorersApi } from '../../../types/scorersTypes'


interface IProps {
    data: Itable[];
    country?: string | null ;
}

const useStyles = makeStyles({
    table: {
        minWidth: 650
    },
    text: {
        alignItems: 'center',
    },
    textCenter: {
        textAlign: 'center',
        padding: '30px 0 30px 0',
        '@media (max-width: 1025px)' : {
            width: '100%'
        }
    },
    tableContainer: {
        marginBottom: '30px',
        '@media (max-width: 1025px)' : {
            width: '100%'
        }
    }, 
    row: {
        padding: '18.5px',
    },
    rowHeaderText: {
        fontWeight: 'bold'
    }
});

export default function Index(props: IProps) {

    const classes = useStyles();
    const country: string | undefined = props.country?.toString();
    const [scorers, setScorers] = useState<[] | scorersApi[]>([])

    useEffect(() => {
        const fetchGoalScorers = (country: string | undefined) => {
            if (typeof country === 'string') {
                return api.getGoalScorers(country)
                    .then((res) => {
                        setScorers(res.scorers)
                    })
            }
        }
        fetchGoalScorers(country)
    }, [country])

    return (
        <>
            <TableContainer component={Paper} className={classes.tableContainer}>
                <Typography variant='h4' className={classes.textCenter}>Top Scorers</Typography>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow >
                            <TableCell className={classes.rowHeaderText} >Name</TableCell>
                            <TableCell className={classes.rowHeaderText} >Club</TableCell>
                            <TableCell className={classes.rowHeaderText}>Goals Scored</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {scorers.map((item) => (
                            <TableRow  key={item.player.id}>
                                <TableCell className={classes.row} >{item.player.name}</TableCell>
                                <TableCell className={classes.text}>{item.team.name}</TableCell>
                                <TableCell className={classes.text}>{item.numberOfGoals}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}
