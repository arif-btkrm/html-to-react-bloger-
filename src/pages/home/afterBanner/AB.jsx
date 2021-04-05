function AB(props){
   const h = props.h;
   const p = props.p;
    return(
        <div>
            <div className="col-md-4 col-sm-4">
                <div className="ab-item">
                    <h3> {h} </h3>
                    <p> {p} </p>
                    <br/>
                    <a href="#">Read More</a>
                </div>
            </div>
        </div>
    );
}

export default AB;