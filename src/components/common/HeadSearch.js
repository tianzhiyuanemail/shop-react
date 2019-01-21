import React from 'react';
import {Link} from 'react-router-dom';
import "./common.scss"

class HeadSearch extends React.Component {

    // 渲染之后
    componentDidMount() {
        window.onscroll = function () {
            // 变量t就是滚动条滚动时，到顶部的距离
            const s = document.documentElement.scrollTop || document.body.scrollTop;
            console.info(s )
            const inp_view = document.getElementById('inp');
            if (inp_view !== null) {
                console.info(s >= 100)
                inp_view.style.backgroundColor = s >= 100 ? '#fb5d84' : 'rgba(255, 255, 255, 0)';
            }
        };
    }

    render() {
        return (
            <div className={"HeadSearch"} id={"inp"}  style={{backgroundColor: "rgba(255, 255, 255, 0)"  }}>
                {/*input框*/}
                <div className="header-title" >
                    <Link to={'/search/'} >
                        <div className="search">
                            {/*display:"none",*/}
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

