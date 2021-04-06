
import {Helmet} from "react-helmet";
import AppRouter from "./router";


function App() {
  return (<div className='App'>
    <Helmet>
      
      {/* <link href="http://fonts.googleapis.com/css?family=Open+Sans:400italic,400,300,600" rel="stylesheet"/> */}
      
    </Helmet>
    
    <AppRouter/>
  
  
  </div>);
}

export default App;
