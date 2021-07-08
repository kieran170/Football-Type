import React from 'react';
import Header from '../HeaderComp/Index';
import { Grid} from '@material-ui/core';

export default function Index() {
    return (
        <Grid md={12} style={{backgroundColor: '#dcdbe0'}}>
            <Header />
        </Grid>
    )
}
