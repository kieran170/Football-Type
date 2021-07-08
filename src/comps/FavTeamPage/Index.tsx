import { Typography, Grid } from '@material-ui/core'
import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../context';
import Header from '../HeaderComp/Index'
import * as api from '../../api'
import { dataApi, lookup,standings, table} from '../../types/index'
import Table from './Table/Index'



export default function Index() {
    const userContext = useContext(UserContext)
    const country = userContext?.state.country
    const [leagueNum, setLeagueNum] = useState('')
    const [data, setData] = useState<null | dataApi>(null)
    const [teams, setTeams] = useState<[] | table[]>([])



    useEffect(() => {
        const lookup = (country: string | null | undefined) => {
            if (typeof country === 'string') {
                const cLookup: lookup = {
                    england: '2021',
                    spain: '2014',
                    italy: '2019'
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

    return (
        <Grid container md={12} style={{ backgroundColor: '#d2d0d7', height: '100hv' }}>
            <Grid container md={12}>
                <Header />
                <Grid item md={12} style={{ textAlign: 'center' }}>
                    <Typography variant='h1'>{data?.competition.name.toUpperCase()}</Typography>
                </Grid>
                <Grid>
                <Table data={teams} />
                </Grid>
            </Grid>
        </Grid>
    )
}
