import React from 'react';
import {Link} from 'react-router-dom';
import "./common.scss"
import $ from 'jquery';

class HeadSearch extends React.Component {

    // 渲染之后
    componentDidMount() {

        $(window).scroll(()=>{
            // 变量t就是滚动条滚动时，到顶部的距离
            const s = document.documentElement.scrollTop || document.body.scrollTop;
            const inp_view = document.getElementById('inp');
            const input_view = document.getElementById('input');
            if (inp_view !== null) {
                inp_view.style.backgroundColor = s >= 100 ? '#fb5d84' : 'rgba(255, 255, 255, 0)';
                input_view.style.backgroundColor = s >= 100 ? '#ffffff' : 'rgba(255, 255, 255, 0.3)';
            }
        })
    }

    render() {
        return (
            <div className={"HeadSearch"} id={"inp"}  style={{backgroundColor: "rgba(255, 255, 255, 0)"  }}>
                {/*input框*/}
                <div className="header-title" >
                    <Link to={'/search/'} >
                        <div className="search">
                            {/*display:"none",*/}
                           <input id={"input"}
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

