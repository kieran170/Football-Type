import React from 'react'
import { Itable } from '../../../types/index'
import { makeStyles, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core/';
import { Link } from 'react-router-dom';


interface IProps {
    data: Itable[];
}

const useStyles = makeStyles({
    table: {
        minWidth: 450,
    },
    text: {
        textAlign: 'center'
    },
    row: {
        backgroundColor: 'white',
        '&:hover': {
            backgroundColor: 'grey'
        }
    }
});

export default function Index(props: IProps) {
    const classes = useStyles();
    const data = props.data
    return (
        <TableContainer component={Paper}>
            <Typography variant='h4' style={{ textAlign: 'center' }}>League Table</Typography>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Position</TableCell>
                        <TableCell >Team</TableCell>
                        <TableCell className={classes.text}>Played</TableCell>
                        <TableCell className={classes.text}>Won</TableCell>
                        <TableCell className={classes.text}>Drawn</TableCell>
                        <TableCell className={classes.text}>Lost</TableCell>
                        <TableCell className={classes.text}>Goal Difference</TableCell>
                        <TableCell className={classes.text} >Points</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((item) => (
                        <TableRow key={item.team.name} className={classes.row}>
                            <TableCell component="th" scope="row">
                                {item.position}
                            </TableCell>
                            <Link style={{ textDecoration: 'none' }} to={`/teams/${item.team.id}`}>
                                <TableCell > <img style={{ height: '20px' }} src={item.team.crestUrl} alt='team-name' />{item.team.name}</TableCell>
                            </Link>
                            <TableCell style={{ textAlign: 'center' }}>{item.playedGames}</TableCell>
                            <TableCell style={{ textAlign: 'center' }} >{item.won}</TableCell>
                            <TableCell style={{ textAlign: 'center' }}>{item.draw}</TableCell>
                            <TableCell style={{ textAlign: 'center' }}>{item.lost}</TableCell>
                            <TableCell style={{ textAlign: 'center' }}>{item.goalDifference}</TableCell>
                            <TableCell style={{ textAlign: 'center' }}>{item.points}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
