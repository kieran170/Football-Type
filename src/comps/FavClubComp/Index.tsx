import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../context';
import { Grid, Typography } from '@material-ui/core/';
import * as api from '../../api'
import { team } from '../../types/team';

export default function Index() {

    const userContext = useContext(UserContext)
    const favTeamNumber = userContext?.state.fields.favTeamNum
    const [data, setData] = useState<team | null>(null)

    useEffect(() => {
        const getTeamData = () => {
            if (typeof favTeamNumber === 'string') {
              return api.getTeamData(favTeamNumber)
                .then((res) => {
                    setData(res)
                })  
            }
        }
        getTeamData()
    }, [favTeamNumber])
    return (
        <Grid container md={12}>
            <Grid style={{ justifyContent: 'center', display: 'inline-flex', alignItems: 'center' }} item md={12}>
                <Typography variant='h2'>{data?.shortName.toUpperCase()}</Typography>
                <img style={{ height: '50px' }} src={data?.crestUrl} alt='club-badge' />
            </Grid>
            <Grid item md={12} style={{paddingLeft: '8px'}}>
                <Typography variant='h4' style={{ textDecoration: 'underline', marginBottom: '20px'}}>Team Data</Typography>
                <Typography>Name - {data?.name}</Typography>
                <Typography>Founded - {data?.founded}</Typography>
                <Typography>Website - <a style={{color: 'black', textDecoration: 'none'}} target='blank' href={`${data?.website}`}>{data?.website}</a></Typography>
                <Typography>Venue - {data?.venue}</Typography>
                <Typography>Venue Location - {data?.address}</Typography>
                <Typography>Contact Number - {data?.phone}</Typography>
            </Grid>
            <Grid item md={12} style={{padding: '20px 0  0 8px'}}>
                <Typography variant='h4' style={{ textDecoration: 'underline'}}>Squad Rooster</Typography>
            <Grid container md={12} style={{marginTop: '20px'}}>
                <Grid item md={2}>
                    <Typography variant='h5' style={{ textDecoration: 'underline'}}>Position</Typography>
                </Grid>
                <Grid item md={2}>
                    <Typography variant='h5' style={{ textDecoration: 'underline'}}>Name</Typography>
                </Grid>
                <Grid item md={2}>
                    <Typography variant='h5' style={{ textDecoration: 'underline'}}>Nationality</Typography>
                </Grid>
            </Grid>
                <Grid container md={12}>
                {data?.squad.map((player) => {
                    if (player.position) {
                        return (
                            <Grid key={player.id} item md={12} style={{display: 'inline-flex'}}>
                                <Grid item md={2}>
                                    <Typography>{player.position}</Typography>
                                </Grid>
                                <Grid item md={2}>
                                    <Typography>{player.name}</Typography>
                                </Grid>
                                <Grid item md={2}>
                                    <Typography>{player.countryOfBirth}</Typography>
                                </Grid>
                            </Grid>
                        )
                    }
                })}
                </Grid>
            </Grid>
        </Grid>
    )
}
