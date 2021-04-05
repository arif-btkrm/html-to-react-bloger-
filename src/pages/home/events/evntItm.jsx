
function EventItem(props){
    
    const eventImg = props.img;
    const header = props.hdr;
    const subText = props.st;
    const detail = props.evndtl;
    
    return(
        <div className="col-md-4 col-sm-4">
            <div className="event-item">
                <img className="img-responsive" src={eventImg} alt="Events" />
                <h4><a href="#">{header}</a></h4>
                <span className="sub-text">{subText}</span>
                <p>{detail}</p>
            </div>
        </div>
    )
}
export default EventItem;