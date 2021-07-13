import { Typography, Grid, Button, makeStyles } from '@material-ui/core'
import React, { useContext } from 'react';
import { UserContext } from '../../context';
import { Link } from "react-router-dom";
import NavStrap from '../NavStrap/Index';

const useStyles = makeStyles({
    link: {
        color: 'white',
        fontWeight: 'bold'
    },
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        '&:hover': {
            backgroundColor: '#c30000'
        }
    },
    containerButton: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        '&:hover': {
            backgroundColor: '#c30000'
        },
        '@media (max-width: 1025px)': {
            justifyContent: 'flex-end'
        }
    },
    titleCon1: {
        backgroundColor: '#15377c',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingRight: '8px',
        '@media (max-width: 1025px)': {
            paddingRight: 0,
            justifyContent: 'unset'
        }
    },
    titleCon2: {
        backgroundColor: '#d70202',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingRight: '8px'
    },
    linkDec: {
        textDecoration: 'none'
    },
    pageCon: {
        height: '100px',
        display: 'flex',
        '@media (max-width: 1025px)': {
            height: 'unset'
        }
    },
    headersItem: {
        diplay: 'inline-flex',
        '@media (max-width: 1025px)': {
            display: 'flex',
            justifyContent: 'space-between'
        }
    },
    skySportLink: {
        textDecoration: 'none',
    }
});

export default function Index() {

    const userContext = useContext(UserContext)
    const classes = useStyles()

    const handleClick = () => {
        userContext?.dispatch({
            type: 'LOG_OUT',

        })
    }

    return (
        <>
            <Grid className={classes.pageCon} container md={12}>
                <Grid container md={3} className={classes.titleCon1}>
                    <Grid>
                        <Typography className={classes.link} variant='h3'>FOOTBALL</Typography>
                    </Grid>
                </Grid>
                <Grid container md={9} className={classes.titleCon2}>
                    <Grid item md={2}>
                        <Typography className={classes.link} variant='h4'>PLANET</Typography>
                    </Grid>
                    <Grid item md={3}></Grid>
                    <Grid container md={5} className={classes.headersItem}>
                        <Grid item md={3}>
                            <a className={classes.skySportLink} target='blank' href='https://www.skysports.com/get-sky'>
                                <Typography className={classes.link} >Get Sky Sports</Typography>
                            </a>
                        </Grid>
                        <Grid item md={4} className={classes.container}>
                            <Link className={classes.linkDec} to='/account'>
                                <Typography className={classes.link}>My Account</Typography>
                            </Link>
                        </Grid>
                        <Grid item md={4} className={classes.container}>
                            <Link className={classes.linkDec} to='/home'>
                                <Typography className={classes.link}>Home</Typography>
                            </Link>
                        </Grid>
                    </Grid>
                    <Grid container md={1} className={classes.containerButton}>
                        <Link className={classes.linkDec} to='/'>
                            <Button onClick={handleClick} className={classes.link}>Log Out</Button>
                        </Link>
                    </Grid>
                </Grid>
            </Grid>
            <NavStrap />
        </>
    )
}
