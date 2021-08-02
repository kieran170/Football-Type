import React, {useEffect, useState} from 'react';
import { makeStyles, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core/';
import * as api from '../../../api';
import {Matches} from '../../../types/leagueFixtures'


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

interface IProps {
    country?: string | null ;
    matchday: number | undefined;
}

export default function Index(props: IProps) {
    const classes = useStyles();
    const {country, matchday} = props
    const [fixtures, setFixtures] = useState<Matches[] | []>([])

    useEffect(() => {
        if (typeof country === 'string' && typeof matchday === 'number'){
            const newMatchday = matchday.toString()
            api.getLeagueFixtures(country, newMatchday).then((res) => {
                setFixtures(res.matches)
            })
        }
    }, [country, matchday])


    return (
            <TableContainer component={Paper} className={classes.tableContainer}>
                <Typography variant='h4' className={classes.textCenter}>Game Week {matchday}</Typography>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow >
                            <TableCell className={classes.rowHeaderText} >Date</TableCell>
                            <TableCell className={classes.rowHeaderText} >Home</TableCell>
                            <TableCell className={classes.rowHeaderText} >Away</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {fixtures.map((item) => (
                            <>
                                <TableRow  key={item.id}>
                                    <TableCell className={classes.row} >{new Date(item.utcDate).toString().slice(0, 21)}</TableCell>
                                    <TableCell className={classes.row} >{item.homeTeam.name}</TableCell>
                                    <TableCell className={classes.text}>{item.awayTeam.name}</TableCell>
                                </TableRow>
                            </>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
    )
}
