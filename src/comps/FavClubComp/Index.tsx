import React, { useContext } from 'react';
import { UserContext } from '../../context';
import { Grid, Typography } from '@material-ui/core/';

export default function Index() {

    const userContext = useContext(UserContext)
    const favTeamNumber = userContext?.state.fields.favTeamNum
    return (
        <Grid container md={12}>
            <Typography>Hello</Typography>
        </Grid>
    )
}
