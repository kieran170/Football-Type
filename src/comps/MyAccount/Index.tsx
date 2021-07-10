import React, { useContext } from 'react'
import { Typography, Grid, TextField, makeStyles } from '@material-ui/core'
import { UserContext } from '../../context'
import Header from '../HeaderComp/Index'
import Footer from '../Footer/Index'
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    text: {
        marginBottom: '10px'
    },
    emailContainer: {
        display: 'flex',
        flexDirection: 'column',
        paddingTop: '30px'
    },
    passContainer: {
        display: 'flex',
        flexDirection: 'column',
        paddingTop: '30px'
    }
});

export default function Index() {
    const userContext = useContext(UserContext)
    const classes = useStyles()

    const handleChanges = () => {
        console.log('Saved Changes')
    }

    return (
        <>
            <Header />
            <Grid container md={12} style={{ paddingLeft: '8px' }}>
                <Typography style={{ paddingTop: '12px' }} variant='h4' >Settings</Typography>
                <Grid item md={12}>
                    <Typography>Hello {userContext?.state.fields.userName} welcome to settings, here you can change your password and email</Typography>
                </Grid>
                <Grid container md={12}>
                    <Grid item md={3} className={classes.emailContainer}>
                        <TextField className={classes.text} label='Current E-mail' placeholder='Enter Current E-Mail' variant='outlined' />
                        <TextField className={classes.text} label='New E-mail' placeholder='Enter New E-Mail' variant='outlined' />
                        <TextField className={classes.text} label='Confirm New E-mail' placeholder='Enter New E-Mail' variant='outlined' />
                    </Grid>
                    <Grid item md={2}></Grid>
                    <Grid item md={3} className={classes.passContainer}>
                        <TextField className={classes.text} label='Current Password' placeholder='Enter Current Password' variant='outlined' />
                        <TextField className={classes.text} label='New Password' placeholder='Enter New Password' variant='outlined' />
                        <TextField className={classes.text} label='Confirm New Password' placeholder='Enter New Password' variant='outlined' />
                    </Grid>
                </Grid>
                <Grid style={{ margin: '20px 0 20px 8px' }} item md={12}>
                    <Button onChange={handleChanges} variant="contained" color="primary" component="span">Save</Button>
                </Grid>
            </Grid>
            <Grid container md={12} style={{ position: 'fixed', bottom: 0 }}>
                <Footer />
            </Grid>
        </>
    )
}
