import React, { useContext } from 'react'
import { Typography, Grid, TextField } from '@material-ui/core'
import { UserContext } from '../../context'
import Header from '../HeaderComp/Index'
import Footer from '../Footer/Index'
import Button from '@material-ui/core/Button';

export default function Index() {
    const userContext = useContext(UserContext)

    const handleChanges = () => {

    }

    return (
        <>
            <Header />
            <Grid container md={12}>
                <Typography style={{ paddingLeft: '8px', paddingTop: '12px' }} variant='h4' >Settings</Typography>
                <Grid item md={12}>
                    <Typography style={{ paddingBottom: '30px', paddingLeft: '8px' }}>Hello {userContext?.state.fields.userName} Welcome to settings, here you can change your password and email</Typography>
                </Grid>
                <Grid container md={12}>
                    <Grid item md={3} style={{ paddingLeft: '8px', display: 'flex', flexDirection: 'column' }}>
                        <TextField style={{ marginBottom: '10px' }} label='Current E-mail' placeholder='Enter Current E-Mail' variant='outlined' />
                        <TextField style={{ marginBottom: '10px' }} label='New E-mail' placeholder='Enter New E-Mail' variant='outlined' />
                        <TextField style={{ marginBottom: '10px' }} label='Confirm New E-mail' placeholder='Enter New E-Mail' variant='outlined' />
                    </Grid>
                    <Grid item md={2}></Grid>
                    <Grid item md={3} style={{ display: 'flex', flexDirection: 'column' }}>
                        <TextField style={{ marginBottom: '10px' }} label='Current Password' placeholder='Enter Current Password' variant='outlined' />
                        <TextField style={{ marginBottom: '10px' }} label='New Password' placeholder='Enter New Password' variant='outlined' />
                        <TextField style={{ marginBottom: '10px' }} label='Confirm New Password' placeholder='Enter New Password' variant='outlined' />
                    </Grid>
                </Grid>
                <Grid style={{ margin: '20px 0 20px 8px' }} item md={12}>
                    <Button onChange={handleChanges} variant="contained" color="primary" component="span">Save</Button>
                </Grid>
            </Grid>
            <Footer />
        </>
    )
}
