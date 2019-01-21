/**
 * Created by wuyakun on 2017/4/28.
 */

import React from 'react';

//点击返回顶部

class BackTop extends React.Component {

    // 渲染之后
    componentDidMount() {
        window.onscroll = function () {
            // 变量t就是滚动条滚动时，到顶部的距离
            const t = document.documentElement.scrollTop || document.body.scrollTop;
            const top_view = document.getElementById('top_view');
            if (top_view !== null) {
                top_view.style.display = t >= 100 ? 'block' : 'none';
            }
        };
    }

    // 返回顶部
    scrollToTop = () => {
        window.scrollTo(0, 0);
    };

    render() {
        return (
            <div
                id="top_view"
                onClick={this.scrollToTop}
                className="back-top"
                style={{display:"none", position: "fixed",top: "83%",left: "83%" ,zIndex: 100}}
            >
                <img style={{width:"31px"}} src={"http://shuzibika.com/tbk/sys/backtop.png"} />
            </div>
        );
    }
}

export default BackTop;