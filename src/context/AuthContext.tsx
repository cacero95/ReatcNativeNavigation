import React, { createContext, useReducer } from 'react'
import { authReducer } from './authReducer';

export interface AuthState {
    isLoggedIn: boolean,
    username?: string,
    favoriteIcon?: string
}

export const authInitialState: AuthState = {
    isLoggedIn: false
}


export interface AuthContextProps {
    authState: AuthState,
    signIn: ( props:string ) => void
}

export const AuthContext = createContext( {} as AuthContextProps );

export const AuthProvider = ({ children }: any ) => {

    const [ authState, dispatch ] = useReducer( authReducer, authInitialState );

    const signIn = ( value: string ) => {
        dispatch({ type: 'signin', payload: value });
    }

    return (
        <AuthContext.Provider 
            value = {{
                authState,
                signIn
            }}
        >
            { children }
        </AuthContext.Provider>
    )
}
