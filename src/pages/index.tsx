import React from "react"
import {Link} from "gatsby";

const IndexPage = () => {
    return(
        <div>
            this is index page
            <ul>
                <li>
                    <Link to={"/AboutPage/"}>Link to about page</Link>
                </li>
            </ul>
        </div>
    )
}
export default IndexPage