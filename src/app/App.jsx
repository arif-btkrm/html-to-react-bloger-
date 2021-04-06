
import {Helmet} from "react-helmet";
import AppRouter from "./router";


import './../assets/styles/style.css';
import './../assets/styles/bootstrap.css'





// import './../assets/js/bootstrap';
// import './../assets/js/custom';
// import './../assets/js/html5shiv';
// import './../assets/js/jquery';

function App() {
  return (<div className='App'>
    <Helmet>
      
      <link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Open+Sans:400italic,400,300,600" />
  {/* Not Working */}
      
    {/*  
     */}
     {/* <script>try{Typekit.load({ async: true })}catch(e){}</script> */}
    </Helmet>
    
    <AppRouter/>
  
  
  </div>);
}

export default App;
