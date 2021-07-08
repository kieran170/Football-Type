import {Typography, Grid} from '@material-ui/core'
import React, {useContext, useEffect, useState} from 'react';
import { UserContext} from '../../context';
import Header from '../HeaderComp/Index'
import * as api from '../../api'
import {dataApi} from '../../types/index'

interface lookup {
    [key: string]: string
}

export default function Index() {
    const userContext = useContext(UserContext)
    const country = userContext?.state.country
    const [leagueNum, setLeagueNum] = useState('')
    const [data, setData] = useState<null | dataApi>(null)

    useEffect(() => {
        const lookup = (country: string| null| undefined) => {
            if (typeof country === 'string') {
               const cLookup:lookup = {
                england: '2021',
                spain: '2014',
                italy: '2019'
            }
            setLeagueNum(cLookup[country])
            }
        }
        lookup(country)
    }, [])

    useEffect(() => {
        const fetchData = (leagueNum: string) => {
            return api
         .getLeagues(leagueNum)
         .then((res) => {
             setData(res)
         }) 
         }
           fetchData(leagueNum)
    }, [leagueNum])

    return (
        <Grid container md={12}>
            <Header />
            <Grid item md={12} style={{textAlign: 'center'}}>
                <Typography variant='h1'>{data?.competition.name}</Typography>
            </Grid>
            <pre>{JSON.stringify(data, null, 2)}</pre>
            {console.log(data)}
        </Grid>
    )
}
