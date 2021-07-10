import React, { useContext, useState, useEffect } from 'react'
import { Grid, Typography, TextField, Button, FormControl, Select, MenuItem } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { UserContext } from '../../context'
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export default function Index(): JSX.Element {
    const userContext = useContext(UserContext);
    const classes = useStyles();
    const [error, setError] = useState<boolean>(false);
    const [emailError, setEmailError] = useState<boolean>();
    const [logged, setLogged] = useState<boolean>(false);
    let history = useHistory();
    const fields = [
        {
            name: 'Name',
            placeholder: 'Enter Username',
            key: 'userName'
        },
        {
            name: 'E-Mail',
            placeholder: 'Enter E-Mail',
            key: 'email'
        },
        {
            name: 'Password',
            placeholder: 'Enter Password',
            type: 'password',
            key: 'password'
        },
        {
            name: 'Favorite Team',
            placeholder: 'pick favorite team',
            type: 'select',
            key: 'favTeam',
        }
    ]

    const handleChange = (key: string, e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        userContext?.dispatch({
            type: 'UPDATE_FIELDS',
            payload: e.target.value,
            key,
        })
    };

    const handleCountryChange = (e: React.ChangeEvent<{ value: unknown }>) => {
        userContext?.dispatch({
            type: 'SET_COUNTRY',
            payload: e.target.value
        })
    }

    const handleClick = () => {
        if (userContext?.state.fields.userName && userContext?.state.fields.password && userContext?.state.fields.email && userContext?.state.country) {
            const email = userContext?.state.fields.email
            const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
                if (regex.test(email) === true) {
                    setEmailError(false)
                    userContext?.dispatch({
                        type: 'LOG_IN'
                    })
                } else {
                    setEmailError(true)
                    setError(false)
            }
        }
        else {
            setError(true)
        }
    }

    useEffect(() => {
        if (userContext?.state.logged === true) {
            setLogged(true)
            setTimeout(() => {
                history.push('/home')
            }, 5000)
        }
    }, [userContext?.state.logged, history])

    return (
        <Grid style={{ height: '100vh', backgroundColor: '#3c3c3c' }}>
            <Grid style={{ display: 'flex', justifyContent: 'center' }}>
            </Grid>
            {!logged ?
                <Grid container md={12} style={{ display: 'flex', justifyContent: 'center' }}>
                    <Grid container md={4} style={{ textAlign: 'center', padding: '35px 0 35px 0', backgroundColor: 'rgb(100 100 255)', borderRadius: '10px', justifyContent: 'center', marginTop: '5%' }}>
                        <Grid item md={12}>
                            <Typography style={{ fontWeight: 1000 }} variant='h3'>WELCOME</Typography>
                        </Grid>
                        {fields.map((field) => {
                            if (field.type === 'select') {
                                return (
                                    <Grid item md={12} style={{ paddingTop: '25px' }}>
                                        <FormControl variant="filled" className={classes.formControl}>
                                            <Typography>Pick your favorite league</Typography>
                                            <Select
                                                style={{backgroundColor: 'white', borderRadius: '15px'}}
                                                labelId="demo-simple-select-filled-label"
                                                id="demo-simple-select-filled"
                                                onChange={(e) => handleCountryChange(e)}
                                            >
                                                <MenuItem value={'england'}>England</MenuItem>
                                                <MenuItem value={'spain'}>Spain</MenuItem>
                                                <MenuItem value={'italy'}>Italy</MenuItem>
                                                <MenuItem value={'germany'}>Germany</MenuItem>
                                                <MenuItem value={'france'}>France</MenuItem>
                                                <MenuItem value={'brazil'}>Brazil</MenuItem>
                                                <MenuItem value={'portugal'}>Portugal</MenuItem>

                                            </Select>
                                        </FormControl>
                                    </Grid>
                                )
                            }
                            return (
                                <Grid item md={12} style={{ paddingTop: '30px' }}>
                                    <Typography>{field.name}</Typography>
                                    <TextField onChange={(e) => handleChange(field.key, e)} style={{ backgroundColor: 'white', borderRadius: '14px' }} variant='outlined' type={field.type || 'text'} placeholder={field.placeholder} />
                                </Grid>
                            )
                        })}
                        <Button onClick={handleClick} style={{ marginTop: '25px', backgroundColor: 'white' }} variant='outlined'>Log In</Button>
                        <Grid md={12}>
                            {error && <Typography>Please fill all fields</Typography>}
                            {emailError && <Typography>Enter a valid email</Typography>}
                        </Grid>
                    </Grid>
                </Grid>
                :
                <>
                    <Grid md={12}>
                        <Typography style={{ color: 'white', fontWeight: 1000, display: 'flex', justifyContent: 'center' }} variant='h2'>Welcome To Plant Football</Typography>
                    </Grid>
                    <Grid md={12}>
                        <Typography style={{ color: 'white', fontWeight: 1000, display: 'flex', justifyContent: 'center' }} variant='h1'>{userContext?.state.fields.userName}</Typography>
                    </Grid>
                    <Grid style={{ display: 'flex', justifyContent: 'center' }}>
                        <img style={{ height: '500px' }} src='https://freesvg.org/img/1549325322.png' alt='soccer' />
                    </Grid>
                </>
            }
        </Grid>
    )
}
