import { AuthState } from './AuthContext';

type AuthAction = {
    type: 'signin', payload: string
}

export const authReducer = ( state: AuthState, action: AuthAction ): AuthState => {
    switch ( action.type ) {
        case 'signin':
            return {
                ...state,
                isLoggedIn: true,
                username: action.payload
            }
        default:
            return state;
    }
}