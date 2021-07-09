import React, { createContext, useReducer } from 'react';

interface State {
    fields: {
        [key: string]: string
    },
    logged: boolean,
    country: string | null,
    favTeamNum: string | null
}

type Action = {
    type: 'UPDATE_FIELDS' | 'LOG_IN' | 'LOG_OUT' | 'SET_COUNTRY',
    key: string,
    payload: string,
}

export const UserContext = createContext<{ state: State, dispatch: React.Dispatch<any> } | null>(null)

const initialState: State = {
    fields: {

    },
    logged: false,
    country: null,
    favTeamNum: null,
}

const reducer = (state: State, action: Action) => {
    switch (action.type) {
        case 'UPDATE_FIELDS':
            return {
                ...state,
                fields: {
                    ...state.fields,
                    [action.key]: action.payload
                }
            }
        case 'SET_COUNTRY':
            return {
                ...state,
                country: action.payload
            }
        case 'LOG_IN':
            return {
                ...state,
                logged: true
            }
        case 'LOG_OUT':
            return {
                ...state,
                fields: {},
                logged: false
            }
        default:
            return state
    }
}


export const UserContextProvider: React.FC = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const value = { state, dispatch }
    return (
        <UserContext.Provider value={value}>{children}</UserContext.Provider>
    )
}

