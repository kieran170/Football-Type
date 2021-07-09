import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import FolderIcon from '@material-ui/icons/Folder';

export default function Index() {
    return (
        <Grid container md={12} style={{ height: '200px', backgroundColor: 'rgb(222, 221, 226)', bottom: 0, display: 'inline-flex' }}>
            <Typography style={{ display: 'flex', padding: '10px', alignItems: 'flex-end' }}>Kieran Cookson 2021</Typography>
            <Grid style={{ display: 'flex', padding: '10px', alignItems: 'flex-end' }}>
                <a style={{ textDecoration: 'none', color: 'black' }} href='https://www.linkedin.com/in/kieran-cookson/' target='blank'>
                    <LinkedInIcon />
                </a>
                <a style={{ textDecoration: 'none', color: 'black' }} href='https://kierans-portfolio.netlify.app/' target='blank'>
                    <FolderIcon />
                </a>
                <a style={{ textDecoration: 'none', color: 'black' }} href='mailto:kieran170@hotmail.co.uk'>
                    <EmailIcon />
                </a>
            </Grid>
        </Grid>
    )
}
