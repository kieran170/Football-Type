import { Typography, Grid, FormControl, Select, MenuItem, makeStyles} from '@material-ui/core'
import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../context';
import Header from '../HeaderComp/Index'
import * as api from '../../api'
import { dataApi, lookup, standings, Itable } from '../../types/index'
import LeagueTable from './LeagueTable/Index'
import GoalScorerTable from './GoalScorerTable/Index'
import Footer from '../Footer/Index'

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));



export default function Index() {
    const userContext = useContext(UserContext)
    const country = userContext?.state.country?.toString()
    const [leagueNum, setLeagueNum] = useState('')
    const [data, setData] = useState<null | dataApi>(null)
    const [teams, setTeams] = useState<[] | Itable[]>([])
    const classes = useStyles();



    useEffect(() => {
        const lookup = (country: string | undefined) => {
            if (typeof country === 'string') {
                const cLookup: lookup = {
                    england: '2021',
                    spain: '2014',
                    italy: '2019',
                    germany: '2002',
                    france: '2015',
                    brazil: '2013',
                    portugal: '2017',
                }
                setLeagueNum(cLookup[country])
            }
        }
        lookup(country)
    }, [country])

    useEffect(() => {
        const fetchData = (leagueNum: string) => {
            return api
                .getLeagues(leagueNum)
                .then((res) => {
                    setData(res)
                    const teamsDataArr = res.standings.map((teamsData: standings) => {
                        return teamsData.table.map((team) => {
                            return team
                        })
                    })
                    setTeams(teamsDataArr[0])
                })
        }
        fetchData(leagueNum)
    }, [leagueNum])

    const handleCountryChange = (e: React.ChangeEvent<{ value: unknown }>) => {
        if (typeof e.target.value === 'string') {
           setLeagueNum(e.target.value) 
        }
    }

    return (
        <>
        <Grid container md={12} style={{ backgroundColor: '#d2d0d7', height: '100hv' }}>
            <Grid container md={12}>
                <Header />
                <Grid item md={12} style={{ textAlign: 'center' }}>
                    <Typography variant='h1'>{data?.competition.name.toUpperCase()}</Typography>
                </Grid>
                <Grid item md={12} style={{ paddingTop: '25px' }}>
                    <FormControl variant="filled" className={classes.formControl}>
                        <Typography>Show different league</Typography>
                        <Select
                            labelId="demo-simple-select-filled-label"
                            id="demo-simple-select-filled"
                            onChange={(e) => handleCountryChange(e)}
                        >
                            <MenuItem value={'2021'}>England</MenuItem>
                            <MenuItem value={'2014'}>Spain</MenuItem>
                            <MenuItem value={'2019'}>Italy</MenuItem>
                            <MenuItem value={'2002'}>Germany</MenuItem>
                            <MenuItem value={'2015'}>France</MenuItem>
                            <MenuItem value={'2013'}>Brazil</MenuItem>
                            <MenuItem value={'2017'}>Portugal</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid container md={12}>
                    <Grid container md={6}>
                        <LeagueTable data={teams} />
                    </Grid>
                    <Grid md={6}>
                        <GoalScorerTable country={leagueNum} data={teams} />
                    </Grid>

                </Grid>
            </Grid>
        </Grid>
        <Footer />
        </>
    )
}
