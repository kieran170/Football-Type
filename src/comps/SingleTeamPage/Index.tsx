import React, { useEffect, useContext, useState } from 'react';
import { Grid, Typography } from '@material-ui/core/';
import { useParams } from 'react-router-dom';
import * as api from '../../api';
import Button from '@material-ui/core/Button';
import { UserContext } from '../../context/index';
import Header from '../HeaderComp/Index';
import Footer from '../Footer/Index';
import { team } from '../../types/team'

interface param {
    team_id: string;
}

export default function Index() {
    const userContext = useContext(UserContext)
    const { team_id } = useParams<param>()
    const [data, setData] = useState<team | null>(null)

    const handleClick = () => {
        userContext?.dispatch({
            type: 'UPDATE_FIELDS',
            key: 'favTeamNum',
            payload: team_id,
        })
    }

    useEffect(() => {
        const getTeamData = () => {
            return api.getTeamData(team_id)
                .then((res) => {
                    setData(res)
                })
        }
        getTeamData()
    }, [team_id])
    return (
        <Grid container md={12}>
            {console.log(data)}
            <Header />
            <Grid style={{ justifyContent: 'center', display: 'inline-flex', alignItems: 'center' }} item md={12}>
                <Typography variant='h2'>{data?.shortName}</Typography>
                <img style={{ height: '50px' }} src={data?.crestUrl} alt='club-badge' />
            </Grid>
            <Grid style={{ display: 'flex', justifyContent: 'flex-end' }} item md={12}>
                <Button onClick={handleClick} variant='outlined'>Save as favorite team</Button>
            </Grid>
            <Grid item md={12}>
                <Typography style={{ textDecoration: 'underline', paddingLeft: '8px' }}>Team Data</Typography>
            </Grid>
            <Footer />
        </Grid>
    )
}
