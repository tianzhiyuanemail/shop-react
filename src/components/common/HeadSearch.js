import React from 'react';
import {Link} from 'react-router-dom';
import "./common.scss"

class HeadSearch extends React.Component {

    componentDidMount() {
        // this.autoFocusInst.focus();
    }

    render() {
        return (
            <div className={"HeadSearch"}>
                {/*input框*/}
                <div className="header-title" >
                    <Link to={'/search/'} >
                        <div className="search">
                           <input
                               type="text"
                               placeholder={"搜你要的内容"}
                           />
                        </div>
                    </Link>
                </div>
            </div>
            )
    }
}

export { HeadSearch as default};

