
function Team(props){
    
    const img = props.img;
    const name = props.name;
    const dig = props.dig;
    const contact = props.cont

    return(
        <div className="col-md-3 col-sm-3">
            <div className="member">
                <img className="img-responsive" src={img} alt="Team Member" />
                <h3>{name}</h3>
                <span className="dig">{dig}</span>
                <a href="#">{contact}</a>
            </div>
        </div>
    )
}

export default Team;