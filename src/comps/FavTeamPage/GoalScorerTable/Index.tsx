import React from 'react'
import { Itable } from '../../../types/index'
import { makeStyles, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core/';


interface IProps {
    data: Itable[];
}

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

export default function Index(props: IProps) {

    const classes = useStyles();


    const data = props.data
    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Position</TableCell>
                        <TableCell>Team</TableCell>
                        <TableCell align="right">Played</TableCell>
                        <TableCell align="right">Goal Difference</TableCell>
                        <TableCell align="right">Points</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((item) => (
                        <TableRow key={item.team.name}>
                            <TableCell component="th" scope="row">
                                {item.position}
                            </TableCell>
                            <TableCell>{item.team.name}</TableCell>
                            <TableCell>{item.playedGames}</TableCell>
                            <TableCell>{item.goalDifference}</TableCell>
                            <TableCell>{item.points}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
