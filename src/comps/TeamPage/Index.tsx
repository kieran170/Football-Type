import React, { useEffect, useContext } from 'react'
import { Grid, Typography } from '@material-ui/core/';
import { useParams } from 'react-router-dom';
import * as api from '../../api'
import Button from '@material-ui/core/Button';
import { UserContext } from '../../context/index';
import { Link } from "react-router-dom";

interface param {
    team_id: string;
}

export default function Index() {
    const userContext = useContext(UserContext)
    const { team_id } = useParams<param>()

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
                    console.log(res)
                })
        }
        getTeamData()
    }, [team_id])
    return (
        <Grid container md={12}>
            <Typography>Hello</Typography>
            <Button onClick={handleClick} variant='outlined'>Save as favorite team</Button>
            <Link to='/home'>
                <Button>Home</Button>
            </Link>
        </Grid>
    )
}
