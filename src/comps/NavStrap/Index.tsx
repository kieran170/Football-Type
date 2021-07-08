import React from 'react';
import { Grid, Typography} from '@material-ui/core';

export default function Index() {
    const links = ['Home', 'Sports', 'Scores', 'Video', 'TV', 'Sky Bet', 'Games']
    return (
        <Grid container md={12} style={{backgroundColor: '#dedde2'}}>
            <Grid container md={1}></Grid>
            <Grid container md ={8}>
            {links.map((link) => {
                return (
                <Grid item md={1}>
                <Typography>{link}</Typography>
                </Grid>
                )
            })}
            </Grid>
            <Grid container md={2}>

            </Grid>
        </Grid>
    )
}
