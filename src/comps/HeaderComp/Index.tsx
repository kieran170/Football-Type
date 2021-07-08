import {Typography, Grid, Button} from '@material-ui/core'
import React, {useContext} from 'react';
import { UserContext} from '../../context';
import { Link} from "react-router-dom";
import NavStrap from '../NavStrap/Index'

export default function Index() {
    const userContext = useContext(UserContext)

    const handleClick = () => {
        userContext?.dispatch({
            type: 'LOG_OUT',

        })
    }

    return (
        <>
        <Grid style={{height: '100px', display: 'flex'}} container md={12}>
            <Grid container md={3} style={{backgroundColor:'#15377c', justifyContent: 'flex-end', alignItems: 'center', paddingRight: '8px'}}>
                <Grid>
                   <Typography style={{color: 'white', fontWeight: 'bold'}} variant='h3'>SKY</Typography> 
                </Grid>
            </Grid>
            <Grid container md={9} style={{backgroundColor:'#d70202', justifyContent: 'flex-start', alignItems: 'center', paddingLeft: '8px'}}>
                <Grid item md={2}>
                    <Typography style={{color: 'white', fontWeight: 'bold'}} variant='h4'>Sports</Typography>
                </Grid>
                <Grid item md={3}></Grid>
                <Grid container md={5} style={{display: 'inline-flex'}}>
                    <Grid item md={4}>
                        <Typography style={{color: 'white', fontWeight: 'bold'}} >Get Sky Sports</Typography>
                    </Grid>
                    <Grid item md={4}>
                        <Typography style={{color: 'white', fontWeight: 'bold'}}>My Account</Typography>
                    </Grid>
                    <Grid item md={4}>
                        <Link style={{textDecoration: 'none'}} to='/favorite-team'>
                        <Typography style={{color: 'white', fontWeight: 'bold'}}>See Favorite League</Typography>
                        </Link>
                    </Grid>
                </Grid>
                <Grid container md={1}>
                    <Link style={{textDecoration: 'none'}} to='/'>
                        <Button onClick={handleClick} style={{color: 'white', fontWeight: 'bold'}}>Log Out</Button>
                    </Link>
                </Grid>
            </Grid>
        </Grid>
        <NavStrap />
        </>
    )
}
