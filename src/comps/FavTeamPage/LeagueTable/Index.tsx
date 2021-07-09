import React from 'react'
import { Itable } from '../../../types/index'
import { makeStyles, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core/';


interface IProps {
    data: Itable[];
}

const useStyles = makeStyles({
    table: {
        minWidth: 450,
    },
});

export default function Index(props: IProps) {
    const classes = useStyles();
    const data = props.data
    return (
        <TableContainer component={Paper}>
            {console.log(data)}
            <Typography variant='h4' style={{textAlign:'center'}}>League Table</Typography>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Position</TableCell>
                        <TableCell >Team</TableCell>
                        <TableCell style={{textAlign: 'center'}}>Played</TableCell>
                        <TableCell style={{textAlign: 'center'}}>Won</TableCell>
                        <TableCell style={{textAlign: 'center'}}>Drawn</TableCell>
                        <TableCell style={{textAlign: 'center'}}>Lost</TableCell>
                        <TableCell style={{textAlign: 'center'}}>Goal Difference</TableCell>
                        <TableCell style={{textAlign: 'center'}} >Points</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((item) => (
                        <TableRow key={item.team.name}>
                            <TableCell component="th" scope="row">
                                {item.position}
                            </TableCell>
                            <TableCell ><img style={{ height: '20px' }} src={item.team.crestUrl} alt='hello' />{item.team.name}</TableCell>
                            <TableCell style={{textAlign: 'center'}}>{item.playedGames}</TableCell>
                            <TableCell style={{textAlign: 'center'}} >{item.won}</TableCell>
                            <TableCell style={{textAlign: 'center'}}>{item.draw}</TableCell>
                            <TableCell style={{textAlign: 'center'}}>{item.lost}</TableCell>
                            <TableCell style={{textAlign: 'center'}}>{item.goalDifference}</TableCell>
                            <TableCell style={{textAlign: 'center'}}>{item.points}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
