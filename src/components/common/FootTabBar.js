import React from 'react';
import { Link  } from 'react-router-dom';
import "./common.scss"
class FootTabBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pathname : window.location.pathname,
        };
    }
    render() {

        return (
           <div>
               <footer  className="FootTabBar">
                   <ul >
                       <li >
                           <Link to={'/'} className="home-link" >
                               <img src={this.state.pathname.includes("/index")?"http://shuzibika.com/tbk/home1.png":"http://shuzibika.com/tbk/home.png"}  alt=""/>
                               <span className={this.state.pathname.includes("/index")?"tab-active":""}>首页</span>
                           </Link>
                       </li>
                       <li >
                           <Link to={'/cate'} className="home-link " >
                               <img src={this.state.pathname.includes("/cate")?"http://shuzibika.com/tbk/cate1.png":"http://shuzibika.com/tbk/cate.png"}   alt=""/>
                               <span className={this.state.pathname.includes("/cate")?"tab-active":""}>分类</span>
                           </Link>
                       </li>
                       <li >
                           <Link to={'/9'} className="home-link" >
                               <img  src={this.state.pathname==="/9"?"http://shuzibika.com/tbk/9.91.png":"http://shuzibika.com/tbk/9.9.png"} alt=""/>
                               <span className={this.state.pathname==="/9"?"tab-active":""}>9.9</span>
                           </Link>
                       </li>
                       <li >
                           <Link to={'/my'} className="home-link" >
                               <img   src={this.state.pathname==="/my"?"http://shuzibika.com/tbk/my1.png":"http://shuzibika.com/tbk/my.png"} alt=""/>
                               <span className={this.state.pathname==="/my"?"tab-active":""}>我的</span>
                           </Link>
                       </li>
                   </ul>
               </footer>

           </div>
        );
    }
}
export {FootTabBar as default}