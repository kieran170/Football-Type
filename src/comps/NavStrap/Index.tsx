import React from 'react';
import { Grid, Typography} from '@material-ui/core';
import { Link} from "react-router-dom";


export default function Index() {
    const links = ['Home', 'Sports', 'Scores', 'Video', 'TV', 'Sky Bet', 'Games']
    return (
        <Grid container md={12} style={{backgroundColor: '#dedde2'}}>
            <Grid container md={1}></Grid>
            <Grid container md ={8}>
            {links.map((link) => {
                return (
                <Grid item md={1}>
                    <Link style={{textDecoration: 'none', color: 'black'}} to='/home'>
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
