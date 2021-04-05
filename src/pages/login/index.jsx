import Header from './../../components/Header';
import Footer from './../../components/Footer';
import LoginArea from './LoginArea';

const cls = "ffoot";

function Login(){
    return(
        <div className="wrapper">
            <Header/>
            <LoginArea/>
            <Footer cls={cls}/>
        </div>
    )
}

export default Login;