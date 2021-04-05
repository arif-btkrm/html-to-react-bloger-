
function Blog(props){
    const blogImg = props.img;
    const hdr = props.hdr;
    const dtl = props.dtl;
    const desc = props.desc;
    return(
        <div className="col-md-6 col-sm-6">
                        <div className="entry">
                            <img className="img-responsive" src={blogImg} alt="Blog" />
                            <h3><a href="#">{hdr}</a></h3>
                            <span className="meta">{dtl}</span>
                            <p>{desc}</p>
                        </div>
                    </div>
    )
}

export default Blog;