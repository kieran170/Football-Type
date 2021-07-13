import React from 'react';
import { Grid, Typography, makeStyles } from '@material-ui/core'
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import Step1 from '../../assets/Screenshot 2021-07-10 at 11.43.16.png';
import Step2 from '../../assets/Screenshot 2021-07-10 at 11.46.57.png';
import Step3 from '../../assets/Screenshot 2021-07-10 at 11.50.55.png';
import Step4 from '../../assets/Screenshot 2021-07-10 at 14.11.59.png';
import { Link } from "react-router-dom";

const useStyles = makeStyles({
    stepContainer: {
        display: 'inline-flex'
    },
    image: {
        width: '80%'
    },
    title: {
        display: 'flex',
        justifyContent: 'center',
    },
    margin: {
        margin: '40px 0 40px 0'
    },
    pageContainer: {
        marginLeft: '20px'
    }
});

export default function Index() {
    const classes = useStyles();
    return (
        <Grid container md={12} className={classes.pageContainer}>
            <Grid className={classes.title} item md={12}>
                <Typography variant='h3'>No Favorite Team Picked</Typography>
            </Grid>
            <Grid item md={12} className={classes.margin}>
                <Typography>Please Select a Favorite Team <Link to='home'>Here</Link></Typography>
            </Grid>
            <Grid container md={12}>
                <Grid item md={3}>
                    <Grid item md={12} className={classes.stepContainer}>
                        <Typography>Step 1</Typography>
                        <ArrowRightAltIcon />
                    </Grid>
                    <Grid item md={12}>
                        <img className={classes.image} src={Step1} alt='step 1' />
                    </Grid>
                </Grid>
                <Grid item md={3}>
                    <Grid item md={12} className={classes.stepContainer}>
                        <Typography>Step 2</Typography>
                        <ArrowRightAltIcon />
                    </Grid>
                    <Grid item md={12}>
                        <img className={classes.image} src={Step2} alt='step 1' />
                    </Grid>
                </Grid>
                <Grid item md={3}>
                    <Grid item md={12} className={classes.stepContainer}>
                        <Typography>Step 3</Typography>
                        <ArrowRightAltIcon />
                    </Grid>
                    <Grid item md={12}>
                        <img className={classes.image} src={Step3} alt='step 1' />
                    </Grid>
                </Grid>
                <Grid item md={3}>
                    <Grid item md={12} className={classes.stepContainer}>
                        <Typography>Step 4</Typography>
                        <ArrowRightAltIcon />
                    </Grid>
                    <Grid item md={12}>
                        <img className={classes.image} src={Step4} alt='step 1' />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}
