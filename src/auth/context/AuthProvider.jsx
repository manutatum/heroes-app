import { useReducer } from "react"
import { AuthContext } from "./AuthContext"
import { authReducer } from "./authReducer"
import { types } from "../types/types"

export const AuthProvider = ({ children }) => {

    const init = () => {
        // Coge el usuario del localstorage 
        const user = JSON.parse(localStorage.getItem('user'));
        // Devuelve el resultado de logged y el usuario(null si no existe)
        return {
            logged: !!user,
            user
        }
    }

    //init es la funcion de inicializacion
    const [authState, dispatch] = useReducer(authReducer, {}, init)

    const login = (name = '') => {

        const user = {
            id: '123',
            name
        }

        const action = {
            type: types.login,
            payload: user
        }

        localStorage.setItem('user',JSON.stringify(user));

        dispatch(action);
    }

    const logout = () => {

        const action = {
            type: types.logout,
        }

        localStorage.removeItem('user');

        dispatch(action);
    }

    return (
        <AuthContext.Provider value={{ ...authState, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}
