import { Router } from '@reach/router'

import HomePage from './../pages/home'
import Login from './../pages/login'
import SignUp from './../pages/signup'


function AppRouter(){
    return(
        <Router>
            <HomePage path='/' />
            
            <Login path='login' />
            <SignUp path ='signup' />

        </Router>
    )
}

export default AppRouter;