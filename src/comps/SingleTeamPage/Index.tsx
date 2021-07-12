import React, { useEffect, useContext, useState } from 'react';
import { Grid, Typography, makeStyles } from '@material-ui/core/';
import { useParams } from 'react-router-dom';
import * as api from '../../api';
import Button from '@material-ui/core/Button';
import { UserContext } from '../../context/index';
import Header from '../HeaderComp/Index';
import Footer from '../Footer/Index';
import { team } from '../../types/team';
import { fixtures } from '../../types/fixtures';
import trophy from '../../assets/trophy-fill.svg'

interface param {
    team_id: string;
}


const useStyles = makeStyles({
    container: {
        justifyContent: 'center',
        display: 'inline-flex',
        alignItems: 'center'
    },
    buttonContainer: {
        display: 'flex',
        justifyContent: 'flex-end',
        paddingRight: '20px'
    },
    header: {
        textDecoration: 'underline'
    },
    link: {
        color: 'black',
        textDecoration: 'none'
    },
    dataTitle: {
        textDecoration: 'underline',
        marginBottom: '20px'
    }
});

export default function Index() {
    const userContext = useContext(UserContext)
    const { team_id } = useParams<param>()
    const [data, setData] = useState<team | null>(null)
    const [fixtures, setFixtures] = useState<fixtures[] | []>([])
    const classes = useStyles()

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

    useEffect(() => {
        const getTeamFixtures = () => {
            return api.getTeamFixtures(team_id)
                .then((res) => {
                    setFixtures(res.matches)
                })
        }
        getTeamFixtures()
    }, [team_id])


    return (
        <Grid container md={12}>
            <Header />
            <Grid className={classes.container} item md={12}>
                <Typography variant='h2'>{data?.shortName.toUpperCase()}</Typography>
                <img style={{ height: '50px' }} src={data?.crestUrl} alt='club-badge' />
            </Grid>
            <Grid className={classes.buttonContainer} item md={12}>
                <Button onClick={handleClick} variant='outlined'>Save as favorite team</Button>
            </Grid>
            <Grid item md={12} style={{ paddingLeft: '8px' }}>
                <Typography variant='h4' className={classes.dataTitle}>Team Data</Typography>
                <Typography>Name - {data?.name}</Typography>
                <Typography>Founded - {data?.founded}</Typography>
                <Typography>Website - <a className={classes.link} target='blank' href={`${data?.website}`}>{data?.website}</a></Typography>
                <Typography>Venue - {data?.venue}</Typography>
                <Typography>Venue Location - {data?.address}</Typography>
                <Typography>Contact Number - {data?.phone}</Typography>
            </Grid>
            <Grid item md={8} style={{ padding: '20px 0  0 8px' }}>
                <Typography variant='h4' className={classes.header}>Squad Rooster</Typography>
                <Grid container md={12} style={{ marginTop: '20px' }}>
                    <Grid item md={2}>
                        <Typography variant='h5' className={classes.header}>Position</Typography>
                    </Grid>
                    <Grid item md={4}>
                        <Typography variant='h5' className={classes.header}>Name</Typography>
                    </Grid>
                    <Grid item md={2}>
                        <Typography variant='h5' className={classes.header}>Nationality</Typography>
                    </Grid>
                </Grid>
                <Grid container md={12}>
                    {data?.squad.map((player) => {
                        if (player.position) {
                            return (
                                <Grid item md={12} key={player.id} style={{ display: 'inline-flex' }}>
                                    <Grid item md={2}>
                                        <Typography>{player.position}</Typography>
                                    </Grid>
                                    <Grid item md={4}>
                                        <Typography>{player.name}</Typography>
                                    </Grid>
                                    <Grid item md={2}>
                                        <Typography>{player.countryOfBirth}</Typography>
                                    </Grid>
                                </Grid>
                            )
                        } else return null
                    })}
                </Grid>
            </Grid>
            <Grid item md={4} style={{ padding: '20px 0  0 8px' }}>
                <Typography variant='h4' className={classes.header}>Fixtures</Typography>
                <Grid container md={12} style={{ marginTop: '30px' }}>
                    {console.log(fixtures)}
                    {fixtures.map((fixture) => {
                        let homeOrAway = '';
                        let win: string | null = '';
                        const date = new Date(fixture.utcDate).toDateString()
                        console.log(date)
                        if (fixture.homeTeam.id.toString() === team_id){
                            homeOrAway = 'HOME_TEAM'
                        } else {
                            homeOrAway = 'AWAY_TEAM'
                        }
                        if (homeOrAway === fixture.score.winner) {
                            win = 'WIN'
                        } else if (fixture.score.winner === 'DRAW') {
                            win = 'DRAW'
                        } else if (fixture.score.winner === null) {
                            win= null
                        } else {
                            win = 'LOST'
                        }
                        return (
                            <Grid item md={12} style={{paddingBottom: '10px'}}>
                                <Typography>{date}</Typography>
                                    <Typography>{fixture.homeTeam.name} {fixture.score.fullTime.homeTeam} - {fixture.score.fullTime.awayTeam} {fixture.awayTeam.name} {win === 'WIN' && <img height='20px' src={trophy}/>} </Typography>
                            </Grid>
                        )
                    })}
                </Grid>
            </Grid>
            <Footer />
        </Grid>
    )
}
