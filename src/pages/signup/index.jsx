import Header from './../../components/Header';
import Footer from './../../components/Footer';
import SignUpBody from './signUpBody';

const cls = "ffoot";

function SignUp(){
    return(
        <div className="wrapper">
            <Header/>
            <SignUpBody/>
            <Footer cls={cls}/>
        </div>
    )
}

export default SignUp;