import Header from './../../components/Header';
import Footer from './../../components/Footer';

import Banner from './Banner';
import AfterBanner from './afterBanner/AfterBanner';
import Teams from './team/Teams';
import Blogs from './blogs/Blogs';
import Events from './events/Events';


const cls = "";

function HomePage(){
    return(
    <div className='class="wrapper'> 

        <Header />
    
        <Banner />
    
        <AfterBanner/>
        
        <Events />
    
        <Blogs />
        
        <Teams/>
    
        <Footer cls={cls}/>


    
    </div>
    )
}
export default HomePage;