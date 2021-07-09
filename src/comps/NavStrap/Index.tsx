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
    }
});

export default function Index() {

    const classes = useStyles()
    const links = ['Home', 'Leagues', 'Favorite Club']
    return (
        <Grid container md={12} style={{ backgroundColor: '#dedde2', padding: '8px' }}>
            <Grid container md={1}></Grid>
            <Grid container md={8}>
                {links.map((link) => {
                    if (link === 'Leagues') {
                        return (
                            <Grid item md={1} className={classes.linkCon}>
                                <Link className={classes.link} to='/favorite-team'>
                                    <Typography>{link}</Typography>
                                </Link>
                            </Grid>
                        )
                    }
                    if (link === 'Favorite Club') {
                        return (
                            <Grid item md={1} className={classes.linkCon}>
                                <Link className={classes.link} to='/favorite-club'>
                                    <Typography>{link}</Typography>
                                </Link>
                            </Grid>
                        )
                    }
                    return (
                        <Grid item md={2} className={classes.linkCon}>
                            <Link className={classes.link} to='/home'>
                                <Typography>{link}</Typography>
                            </Link>
                        </Grid>
                    )
                })}
            </Grid>
            <Grid container md={2}>

            </Grid>
        </Grid>
    )
}
