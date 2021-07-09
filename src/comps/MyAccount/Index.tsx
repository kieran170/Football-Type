import React, {useContext} from 'react'
import { UserContext } from '../../context'

export default function Index() {

    const userContext = useContext(UserContext)
    return (
        <div>
            <p>hello {userContext?.state.fields.userName}</p>
        </div>
    )
}
