import teamImg1 from './../../../assets/img/team/1.jpg'
import teamImg2 from './../../../assets/img/team/2.jpg'

import Team from './team'

function Teams(){
    return(<div>

<div className="team" id="team"> {/*Team*/}
            <div className="container">
                <div className="default-heading">
                    <h2>Executing Team</h2>
                </div>
                <div className="row">
                    <Team
                    img = {teamImg1}
                    name="Adam Miser"
                    dig="CEO"
                    cont = "executive.member@bloger.com"
                    />
                    
                    <Team
                    img = {teamImg2}
                    name="Adam Miser"
                    dig="CEO"
                    cont = "executive.member@bloger.com"
                    />

<Team
                    img = {teamImg1}
                    name="Adam Miser"
                    dig="CEO"
                    cont = "executive.member@bloger.com"
                    />

<Team
                    img = {teamImg2}
                    name="Adam Miser"
                    dig="CEO"
                    cont = "executive.member@bloger.com"
                    />
                </div>
            </div>
        </div>

    </div>)
}
export default Teams;