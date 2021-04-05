import blogImg1 from './../../../assets/img/blog/1.jpg'
import blogImg2 from './../../../assets/img/blog/2.jpg'

import Blog from './blog'

function Blogs(){
    return(<div>
        <div className="blog" id="blog"> {/*Blog Part Start */}
            <div className="container">
                <div className="default-heading">
                    <h2>Latest Blogs</h2>
                </div>
                <div className="row">
                    <Blog
                        img = {blogImg1}
                        hdr = "Communicating with you every step of the way"
                        dtl = "July 02, 2014 | Tag: Technology | By: David John"
                        desc = "We combine continuing education and constant monitoring us with your project details if you are interested to ge of industry trends and innovations to provide the right IT solution at the right time. Contact us with your project details if you are interested to get our Web Solution or Software Development Services."
                    />
                    <Blog
                        img = {blogImg2}
                        hdr = "Communicating with you every step of the way"
                        dtl = "July 02, 2014 | Tag: Technology | By: David John"
                        desc = "We combine continuing education and constant monitoring us with your project details if you are interested to ge of industry trends and innovations to provide the right IT solution at the right time. Contact us with your project details if you are interested to get our Web Solution or Software Development Services."
                    />
                    
                </div>
                <div className="text-center">
                    <a href="#" className="btn btn-default">See More</a>
                </div>
            </div>
        </div>
			
		<div className="subscribe" id="subscribe">  {/* Subsrcibe */}
				<div className="container">
					<div className="sub-content">
						<h3>Subscribe Here for Updates</h3>
						<form role="form">
							<div className="input-group">
								<input type="text" className="form-control" placeholder="Email..."/>
									<span className="input-group-btn">
										<button className="btn btn-default" type="button">Subscribe</button>
									</span>
							</div>
						</form>
					</div>
				</div>
			</div>
    </div>)
}
export default Blogs