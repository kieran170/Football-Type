import React, { useContext } from 'react'
import { UserContext } from '../../context'
import { Grid, makeStyles } from '@material-ui/core';
import Header from '../HeaderComp/Index';
import Footer from '../Footer/Index';
import StepComp from '../StepComp/Index'
import FavClubComp from '../FavClubComp/Index'

const useStyles = makeStyles(() => ({
    foot: {
        bottom: 0,
        '@media (max-width: 1025px)': {
            bottom: '0',
            position: 'unset'
        }
    }
}));


export default function Index() {

    const userContext = useContext(UserContext);
    const favTeamNumber = userContext?.state.fields.favTeamNum;
    const classes = useStyles()
    return (
        <Grid container md={12}>
            <Header />
            {favTeamNumber ?
                <FavClubComp />
                :
                <StepComp />
            }
            <Grid container md={12} className={classes.foot}>
                <Footer />
            </Grid>

        </Grid>
    )
}
