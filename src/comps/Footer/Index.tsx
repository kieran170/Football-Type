import React from 'react'
import { Grid, Typography, makeStyles } from '@material-ui/core'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import FolderIcon from '@material-ui/icons/Folder';

const useStyles = makeStyles({
    link: {
        color: 'black',
        textDecoration: 'none'
    },
    linkContainer: {
        display: 'flex',
        padding: '10px',
        alignItems: 'flex-end',
        marginTop: '20px'
    },
    container: {
        height: '100px',
        backgroundColor: 'rgb(222, 221, 226)',
        bottom: 0,
        display: 'inline-flex'
        
    }
});

export default function Index() {
    const classes = useStyles();
    return (
        <Grid container md={12} className={classes.container}>
            <Typography className={classes.linkContainer}>Kieran Cookson 2021</Typography>
            <Grid className={classes.linkContainer}>
                <a className={classes.link} href='https://www.linkedin.com/in/kieran-cookson/' target='blank'>
                    <LinkedInIcon />
                </a>
                <a className={classes.link} href='https://kierans-portfolio.netlify.app/' target='blank'>
                    <FolderIcon />
                </a>
                <a className={classes.link} href='mailto:kieran170@hotmail.co.uk'>
                    <EmailIcon />
                </a>
            </Grid>
        </Grid >
    )
}
