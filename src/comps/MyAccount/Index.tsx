import React, {useContext, useState} from 'react'
import { Typography, Grid, TextField} from '@material-ui/core'
import { UserContext } from '../../context'
import Header from '../HeaderComp/Index'
import UploadButton from '../UploadButton/Index'
import Button from '@material-ui/core/Button';
import Footer from '../Footer/Index'

export default function Index() {
    const userContext = useContext(UserContext)

    return (
        <>
        <Grid container md={12}>
            <Header />
        </Grid>
        <Grid item md={12}>
            <Typography>Welcome {userContext?.state.fields.userName}</Typography>
        </Grid>
        <Grid container md={12}>
            <Grid item md={3}>
                <img style={{maxHeight: '200px'}} src={userContext?.state.fields.newPhoto ? userContext?.state.fields.newPhoto : 'https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg'} alt='default-profile-pic'/>
                <UploadButton />
            </Grid>
            <Grid container md={3} style={{marginLeft: '35px'}}>
                <img style={{maxHeight: '300px'}} src={'https://images.daznservices.com/di/library/sporting_news/2d/cf/euro-2021-bracket-england-vs-italy-final_1uxcf8vgcx16q1lolxmikseine.jpg?t=-2098882558&w=1920&h=1080'} alt='euros-draw' />
            </Grid>
        </Grid>
    <Footer />
    </>
    )
}
