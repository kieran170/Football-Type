import React, { useContext } from 'react'
import { UserContext } from '../../context'
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';

export default function Index() {

    const userContext = useContext(UserContext)
    const favTeamNumber = userContext?.state.fields.favTeamNum
    return (
        <div>
            {favTeamNumber && <p>{favTeamNumber}</p>}
            <Link to='/home'>
                <Button>Home</Button>
            </Link>
        </div>
    )
}
