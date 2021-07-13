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
        textAlign: 'center',
        padding: '30px 0 30px 0',
    },
    row: {
        backgroundColor: 'white',
        textDecoration: 'none',
        transitionDuration: '0.5s',
        '&:hover': {
            backgroundColor: 'grey'
        }
    },
    link: {
        textDecoration: 'none'
    },
    badgeImage: {
        height: '20px',
        paddingRight: '10px',
    },
    rowHeaderText: {
        fontWeight: 'bold'
    },
    rowHeaderTextCenter: {
        fontWeight: 'bold',
        textAlign: 'center'
    },
});

export default function Index(props: IProps) {
    const classes = useStyles();
    const data = props.data
    return (
        <TableContainer component={Paper}>
            <Typography variant='h4' className={classes.text}>League Table</Typography>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell className={classes.rowHeaderText}>Position</TableCell>
                        <TableCell className={classes.rowHeaderText}>Team</TableCell>
                        <TableCell className={classes.rowHeaderTextCenter} >Played</TableCell>
                        <TableCell className={classes.rowHeaderTextCenter} >Won</TableCell>
                        <TableCell className={classes.rowHeaderTextCenter} >Drawn</TableCell>
                        <TableCell className={classes.rowHeaderTextCenter} >Lost</TableCell>
                        <TableCell className={classes.rowHeaderTextCenter} >Goal Difference</TableCell>
                        <TableCell className={classes.rowHeaderTextCenter}  >Points</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((item) => (
                        <TableRow component={Link} to={`/teams/${item.team.id}`} key={item.team.name} className={classes.row}>
                            <TableCell component="th" scope="row">
                                {item.position}
                            </TableCell>
                            <TableCell> <img className={classes.badgeImage} src={item.team.crestUrl} alt='team-name' />{item.team.name}</TableCell>
                            <TableCell className={classes.text}>{item.playedGames}</TableCell>
                            <TableCell className={classes.text}>{item.won}</TableCell>
                            <TableCell className={classes.text}>{item.draw}</TableCell>
                            <TableCell className={classes.text}>{item.lost}</TableCell>
                            <TableCell className={classes.text}>{item.goalDifference}</TableCell>
                            <TableCell className={classes.text}>{item.points}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
