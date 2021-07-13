import React from 'react';
import { Grid, Typography, makeStyles } from '@material-ui/core';
import { Link } from "react-router-dom";


const useStyles = makeStyles({
    link: {
        textDecoration: 'none',
        color: 'black',
        textAlign: 'center'
    },
    linkCon: {
        margin: '9px',
        padding: '5px',
        borderRadius: '15px',
        '&:hover': {
            backgroundColor: 'rgb(210, 208, 215)'
        }
    },
    strapContainer: {
        backgroundColor: '#dedde2', 
        padding: '8px'
    }
});

export default function Index() {

    const classes = useStyles()
    return (
        <Grid container md={12} className={classes.strapContainer}>
            <Grid container md={1}></Grid>
            <Grid container md={8}>
                <Grid item md={1} className={classes.linkCon}>
                    <Link className={classes.link} to='/home'>
                        <Typography>Leagues</Typography>
                    </Link>
                </Grid>
                <Grid item md={2} className={classes.linkCon}>
                    <Link className={classes.link} to='/favorite-club'>
                        <Typography>Favorite Club</Typography>
                    </Link>
                </Grid>
            </Grid>
            <Grid container md={2}>

            </Grid>
        </Grid>
    )
}
