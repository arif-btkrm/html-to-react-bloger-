import eventImg1 from './../../../assets/img/event/1.jpg'
import eventImg2 from './../../../assets/img/event/2.jpg'
import eventImg3 from './../../../assets/img/event/3.jpg'

import EventItem from './evntItm';

function Events (){
    return(<div>

<div className="event" id="event"> {/*Events Part Start */}
            <div className="container">
                <div className="default-heading">               
                    <h2>Upcoming events</h2>
                </div>
                <div className="row">
                    <EventItem
                        img = {eventImg1}
                        hdr = "Rihanna, Eminem on stage"
                        st = "Integrating technology and software solutions."
                        evndtl = "It is our belief that in order to be most efficient it requires adaptive technology and software solutions."
                    />

                    <EventItem
                        img = {eventImg2}
                        hdr = "Dr. Dre on stage live"
                        st = "Integrating technology and software solutions."
                        evndtl = "It is our belief that in order to be most efficient it requires adaptive technology and software solutions."
                    />

                    <EventItem
                        img = {eventImg3}
                        hdr = "Macaroons live Party"
                        st = "Integrating technology and software solutions."
                        evndtl = "It is our belief that in order to be most efficient it requires adaptive technology and software solutions."
                    />


                </div>
            </div>
        </div>

    </div>);
}

export default Events;