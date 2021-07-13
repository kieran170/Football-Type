import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../context';
import { Grid, Typography, makeStyles } from '@material-ui/core/';
import * as api from '../../api'
import { team } from '../../types/team';
import { fixtures } from '../../types/fixtures';
import trophy from '../../assets/trophy-fill.svg'

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
    },
    trophy: {
        height: '50px'
    },
    teamDataContainer: {
        paddingLeft: '8px', 
        marginBottom: '50px'
    },
    mainItemContainer: {
        padding: '20px 0  0 8px'
    },
    rosterSubHeadings: {
        paddingTop: '50px', 
        paddingBottom: '43px'
    },
    playerInfo: {
        display: 'inline-flex'
    },
    fixtureTitle: {
        paddingBottom: '50px', 
        textDecoration: 'underline'
    },
    fixturesSubHeaders: {
        textDecoration: 'underline', 
        paddingBottom: '43px'
    },
    fixtures: {
        paddingBottom: '20px'
    }
});

export default function Index() {

    const userContext = useContext(UserContext);
    const favTeamNumber = userContext?.state.fields.favTeamNum;
    const [data, setData] = useState<team | null>(null);
    const classes = useStyles();
    const [fixtures, setFixtures] = useState<fixtures[] | []>([])

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

    useEffect(() => {
        const getTeamFixtures = () => {
            if (typeof favTeamNumber === 'string') {
                return api.getTeamFixtures(favTeamNumber)
                    .then((res) => {
                        setFixtures(res.matches)
                    })
            }
        }
        getTeamFixtures()
    }, [favTeamNumber])

    return (
        <Grid container md={12}>
            <Grid className={classes.container} item md={12}>
                <Typography variant='h2'>{data?.shortName.toUpperCase()}</Typography>
                <img className={classes.trophy} src={data?.crestUrl} alt='club-badge' />
            </Grid>
            <Grid item md={12} className={classes.teamDataContainer} >
                <Typography variant='h4' className={classes.dataTitle}>Team Data</Typography>
                <Typography>Name - {data?.name}</Typography>
                <Typography>Founded - {data?.founded}</Typography>
                <Typography>Website - <a className={classes.link} target='blank' href={`${data?.website}`}>{data?.website}</a></Typography>
                <Typography>Venue - {data?.venue}</Typography>
                <Typography>Venue Location - {data?.address}</Typography>
                <Typography>Contact Number - {data?.phone}</Typography>
            </Grid>
            <Grid item md={5} className={classes.mainItemContainer}>
                <Typography variant='h4' className={classes.header}>Squad Roster</Typography>
                <Grid container md={12} className={classes.rosterSubHeadings}>
                    <Grid item md={2}>
                        <Typography variant='h5' className={classes.header}>Position</Typography>
                    </Grid>
                    <Grid item md={5}>
                        <Typography variant='h5' className={classes.header}>Name</Typography>
                    </Grid>
                    <Grid item md={1}>
                        <Typography variant='h5' className={classes.header}>Nationality</Typography>
                    </Grid>
                </Grid>
                <Grid container md={12}>
                    {data?.squad.map((player) => {
                        if (player.position) {
                            return (
                                <Grid item md={12} key={player.id} className={classes.playerInfo}>
                                    <Grid item md={2}>
                                        <Typography>{player.position}</Typography>
                                    </Grid>
                                    <Grid item md={5}>
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
            <Grid item md={7} className={classes.mainItemContainer}>
                <Typography variant='h4' className={classes.fixtureTitle}>Fixtures</Typography>
                <Grid container md={12}>
                    <Grid item md={7}>
                        <Grid item md={12} >
                            <Typography variant='h5' className={classes.fixturesSubHeaders}>Previous Games</Typography>
                        </Grid>
                        {fixtures.map((fixture) => {
                            let homeOrAway = '';
                            let win: string | null = '';
                            const date = new Date(fixture.utcDate).toDateString().slice(3);
                            if (fixture.homeTeam.id.toString() === favTeamNumber) {
                                homeOrAway = 'HOME_TEAM'
                            } else {
                                homeOrAway = 'AWAY_TEAM'
                            }
                            if (homeOrAway === fixture.score.winner) {
                                win = 'WIN'
                            } else if (fixture.score.winner === 'DRAW') {
                                win = 'DRAW'
                            } else if (fixture.score.winner === null) {
                                win = null
                            } else {
                                win = 'LOST'
                            }

                            if (fixture.status !== "SCHEDULED") {
                                return (
                                    <>
                                        <Grid key={fixture.id} item md={12} >
                                            <Typography>{date}</Typography>
                                            <Typography className={classes.fixtures}>{fixture.homeTeam.name} {fixture.score.fullTime.homeTeam} - {fixture.score.fullTime.awayTeam} {fixture.awayTeam.name} {win === 'WIN' && <img height='20px' src={trophy} alt='trophy' />} </Typography>
                                        </Grid>
                                    </>
                                )
                            } else return null
                        })}
                    </Grid>
                    <Grid item md={5}>
                        <Grid item md={12} >
                            <Typography variant='h5' className={classes.fixturesSubHeaders}>Future Games</Typography>
                        </Grid>
                        {fixtures.map((fixture) => {
                            const date = new Date(fixture.utcDate).toDateString();
                            if (fixture.status === "SCHEDULED") {
                                return (
                                    <>
                                        <Grid key={fixture.id} item md={12}>
                                            <Typography>{date}</Typography>
                                            <Typography className={classes.fixtures}>{fixture.homeTeam.name} - {fixture.awayTeam.name}</Typography>
                                        </Grid>
                                    </>
                                )
                            } else return null
                        })}
                    </Grid>
                </Grid>
            </Grid>
        </Grid >
    )
}