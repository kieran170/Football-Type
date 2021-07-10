import React, { useContext } from 'react'
import { UserContext } from '../../context'
import { Grid } from '@material-ui/core';
import Header from '../HeaderComp/Index';
import Footer from '../Footer/Index';
import StepComp from '../StepComp/Index'
import FavClubComp from '../FavClubComp/Index'


export default function Index() {

    const userContext = useContext(UserContext)
    const favTeamNumber = userContext?.state.fields.favTeamNum
    return (
        <Grid container md={12}>
            <Header />
            {favTeamNumber ?
                <FavClubComp />
                :
                <StepComp />
            }
            <Footer />
        </Grid>
    )
}
