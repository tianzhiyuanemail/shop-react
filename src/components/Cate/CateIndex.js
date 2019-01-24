import React from 'react';
import FootTabBar from '../common/FootTabBar'
import {Link, Prompt} from 'react-router-dom';
import {Drawer, Icon, List, NavBar} from 'antd-mobile';
import $ from 'jquery';


import "./cate.scss"

class CateIndex extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            dataHeight:-50,
            category:-1,
        };
        this.clickMenu = this.clickMenu.bind(this)
        this.pageScroll = this.pageScroll.bind(this)
    }
    componentDidMount() {
        this.pageScroll();
    }
    pageScroll(){
        $(window).scroll(()=>{
            var  scrollHeight = (document.documentElement.scrollTop || document.body.scrollTop)  ;
            var  height = 0 ;
            var  index = 1;
            $(".categoryList").each(function() {
                height += $(this).height();
                if(height > scrollHeight) {
                    return;
                }
                index++;
            });
            $(".menu .menuItem").removeClass("selected");
            $(".menu .menuItem:nth-child(" + index + ")").addClass("selected");
        })

    }
    //点击菜单定位
    clickMenu(e){
        var index =   e.target.getAttribute("category");
        $(".menu .menuItem").removeClass("selected");
        console.info(index)
        $(".menu .menuItem:nth-child(" + (Number.parseInt(index) + 1)+ ")").addClass("selected");

        var  height = 0 ;
        $(".categoryList").each(function(i) {
            if (index > i){
                height += $(this).height();
                console.info(height)
            }
        });

        setTimeout(function() {
            window.scrollTo(0, height+10);
        }, 100)
    }

    /**
    onClick{(e) => this.itemClick(88)}

    itemClick(e) {
        console.log(e.target.getAttribute('data-i'));
    }
    <div data-i="88" onClick={this.itemClick}>

     onClick={this.itemClick.bind(this)}
     onClick={this.itemClick.bind(this,88)}
       */
    render(){
        return(
            <div className={"CateIndex"}>

                <NavBar
                    // icon={<Icon type="ellipsis" />}
                    // onLeftClick={() => this.onDock('docked')}
                >
                    商品分类
                </NavBar>

                <div>
                    <div id="contentbox">
                        <div className="menu">
                            <div className="menuItem selected"  category="0"   onClick={this.clickMenu} >推荐分类</div>
                            <div className="menuItem" category="1"   onClick={this.clickMenu} >玉翠珠宝</div>
                            <div className="menuItem" category="2"   onClick={this.clickMenu}>书画篆刻</div>
                            <div className="menuItem" category="3"   onClick={this.clickMenu}>茶酒滋补</div>
                            <div className="menuItem" category="4"   onClick={this.clickMenu} >紫砂陶瓷</div>
                            <div className="menuItem" category="5"   onClick={this.clickMenu} >工艺作品</div>
                        </div>

                        <div   className="categoryBox">
                            <div className="categoryContent">
                                <div className="categoryList first" category="-1">
                                    <div className="title">推荐分类<a className="all" href="/category/detail/0">查看全部</a></div>
                                    <div className="categoryItem">
                                        <div className="categoryIcon lazyLoad">
                                            <img src={"http://w.weipaitang.com/res/img/category/1_1004.jpg?t=10"}/>
                                        </div>
                                        <div className="cursorArea"></div>
                                        <span className="text">琥珀/蜜蜡</span>
                                    </div>
                                    <div className="categoryItem">
                                        <div className="categoryIcon lazyLoad">
                                            <img src={"http://w.weipaitang.com/res/img/category/1_1004.jpg?t=10"}/>
                                        </div>
                                        <div className="cursorArea"></div>
                                        <span className="text">琥珀/蜜蜡</span>
                                    </div>
                                    <div className="categoryItem">
                                        <div className="categoryIcon lazyLoad">
                                            <img src={"http://w.weipaitang.com/res/img/category/1_1004.jpg?t=10"}/>
                                        </div>
                                        <div className="cursorArea"></div>
                                        <span className="text">琥珀/蜜蜡</span>
                                    </div>
                                    <div className="categoryItem">
                                        <div className="categoryIcon lazyLoad">
                                            <img src={"http://w.weipaitang.com/res/img/category/1_1004.jpg?t=10"}/>
                                        </div>
                                        <div className="cursorArea"></div>
                                        <span className="text">琥珀/蜜蜡</span>
                                    </div>
                                    <div className="categoryItem">
                                        <div className="categoryIcon lazyLoad">
                                            <img src={"http://w.weipaitang.com/res/img/category/1_1004.jpg?t=10"}/>
                                        </div>
                                        <div className="cursorArea"></div>
                                        <span className="text">琥珀/蜜蜡</span>
                                    </div>
                                    <div className="categoryItem">
                                        <div className="categoryIcon lazyLoad">
                                            <img src={"http://w.weipaitang.com/res/img/category/1_1004.jpg?t=10"}/>
                                        </div>
                                        <div className="cursorArea"></div>
                                        <span className="text">琥珀/蜜蜡</span>
                                    </div>
                                </div>
                                <div className="categoryList" category="-1">
                                    <div className="title">玉翠珠宝<a className="all" href="/category/detail/0">查看全部</a></div>
                                    <div className="categoryItem">
                                        <div className="categoryIcon lazyLoad">
                                            <img src={"http://w.weipaitang.com/res/img/category/1_1004.jpg?t=10"}/>
                                        </div>
                                        <div className="cursorArea"></div>
                                        <span className="text">琥珀/蜜蜡</span>
                                    </div>
                                    <div className="categoryItem">
                                        <div className="categoryIcon lazyLoad">
                                            <img src={"http://w.weipaitang.com/res/img/category/1_1004.jpg?t=10"}/>
                                        </div>
                                        <div className="cursorArea"></div>
                                        <span className="text">琥珀/蜜蜡</span>
                                    </div>
                                    <div className="categoryItem">
                                        <div className="categoryIcon lazyLoad">
                                            <img src={"http://w.weipaitang.com/res/img/category/1_1004.jpg?t=10"}/>
                                        </div>
                                        <div className="cursorArea"></div>
                                        <span className="text">琥珀/蜜蜡</span>
                                    </div>
                                    <div className="categoryItem">
                                        <div className="categoryIcon lazyLoad">
                                            <img src={"http://w.weipaitang.com/res/img/category/1_1004.jpg?t=10"}/>
                                        </div>
                                        <div className="cursorArea"></div>
                                        <span className="text">琥珀/蜜蜡</span>
                                    </div>
                                    <div className="categoryItem">
                                        <div className="categoryIcon lazyLoad">
                                            <img src={"http://w.weipaitang.com/res/img/category/1_1004.jpg?t=10"}/>
                                        </div>
                                        <div className="cursorArea"></div>
                                        <span className="text">琥珀/蜜蜡</span>
                                    </div>
                                    <div className="categoryItem">
                                        <div className="categoryIcon lazyLoad">
                                            <img src={"http://w.weipaitang.com/res/img/category/1_1004.jpg?t=10"}/>
                                        </div>
                                        <div className="cursorArea"></div>
                                        <span className="text">琥珀/蜜蜡</span>
                                    </div>
                                    <div className="categoryItem">
                                        <div className="categoryIcon lazyLoad">
                                            <img src={"http://w.weipaitang.com/res/img/category/1_1004.jpg?t=10"}/>
                                        </div>
                                        <div className="cursorArea"></div>
                                        <span className="text">琥珀/蜜蜡</span>
                                    </div>
                                    <div className="categoryItem">
                                        <div className="categoryIcon lazyLoad">
                                            <img src={"http://w.weipaitang.com/res/img/category/1_1004.jpg?t=10"}/>
                                        </div>
                                        <div className="cursorArea"></div>
                                        <span className="text">琥珀/蜜蜡</span>
                                    </div>
                                    <div className="categoryItem">
                                        <div className="categoryIcon lazyLoad">
                                            <img src={"http://w.weipaitang.com/res/img/category/1_1004.jpg?t=10"}/>
                                        </div>
                                        <div className="cursorArea"></div>
                                        <span className="text">琥珀/蜜蜡</span>
                                    </div>
                                    <div className="categoryItem">
                                        <div className="categoryIcon lazyLoad">
                                            <img src={"http://w.weipaitang.com/res/img/category/1_1004.jpg?t=10"}/>
                                        </div>
                                        <div className="cursorArea"></div>
                                        <span className="text">琥珀/蜜蜡</span>
                                    </div>
                                    <div className="categoryItem">
                                        <div className="categoryIcon lazyLoad">
                                            <img src={"http://w.weipaitang.com/res/img/category/1_1004.jpg?t=10"}/>
                                        </div>
                                        <div className="cursorArea"></div>
                                        <span className="text">琥珀/蜜蜡</span>
                                    </div>
                                    <div className="categoryItem">
                                        <div className="categoryIcon lazyLoad">
                                            <img src={"http://w.weipaitang.com/res/img/category/1_1004.jpg?t=10"}/>
                                        </div>
                                        <div className="cursorArea"></div>
                                        <span className="text">琥珀/蜜蜡</span>
                                    </div>
                                    <div className="categoryItem">
                                        <div className="categoryIcon lazyLoad">
                                            <img src={"http://w.weipaitang.com/res/img/category/1_1004.jpg?t=10"}/>
                                        </div>
                                        <div className="cursorArea"></div>
                                        <span className="text">琥珀/蜜蜡</span>
                                    </div>
                                    <div className="categoryItem">
                                        <div className="categoryIcon lazyLoad">
                                            <img src={"http://w.weipaitang.com/res/img/category/1_1004.jpg?t=10"}/>
                                        </div>
                                        <div className="cursorArea"></div>
                                        <span className="text">琥珀/蜜蜡</span>
                                    </div>
                                    <div className="categoryItem">
                                        <div className="categoryIcon lazyLoad">
                                            <img src={"http://w.weipaitang.com/res/img/category/1_1004.jpg?t=10"}/>
                                        </div>
                                        <div className="cursorArea"></div>
                                        <span className="text">琥珀/蜜蜡</span>
                                    </div>
                                    <div className="categoryItem">
                                        <div className="categoryIcon lazyLoad">
                                            <img src={"http://w.weipaitang.com/res/img/category/1_1004.jpg?t=10"}/>
                                        </div>
                                        <div className="cursorArea"></div>
                                        <span className="text">琥珀/蜜蜡</span>
                                    </div>
                                    <div className="categoryItem">
                                        <div className="categoryIcon lazyLoad">
                                            <img src={"http://w.weipaitang.com/res/img/category/1_1004.jpg?t=10"}/>
                                        </div>
                                        <div className="cursorArea"></div>
                                        <span className="text">琥珀/蜜蜡</span>
                                    </div>
                                    <div className="categoryItem">
                                        <div className="categoryIcon lazyLoad">
                                            <img src={"http://w.weipaitang.com/res/img/category/1_1004.jpg?t=10"}/>
                                        </div>
                                        <div className="cursorArea"></div>
                                        <span className="text">琥珀/蜜蜡</span>
                                    </div>
                                    <div className="categoryItem">
                                        <div className="categoryIcon lazyLoad">
                                            <img src={"http://w.weipaitang.com/res/img/category/1_1004.jpg?t=10"}/>
                                        </div>
                                        <div className="cursorArea"></div>
                                        <span className="text">琥珀/蜜蜡</span>
                                    </div>
                                    <div className="categoryItem">
                                        <div className="categoryIcon lazyLoad">
                                            <img src={"http://w.weipaitang.com/res/img/category/1_1004.jpg?t=10"}/>
                                        </div>
                                        <div className="cursorArea"></div>
                                        <span className="text">琥珀/蜜蜡</span>
                                    </div>
                                    <div className="categoryItem">
                                        <div className="categoryIcon lazyLoad">
                                            <img src={"http://w.weipaitang.com/res/img/category/1_1004.jpg?t=10"}/>
                                        </div>
                                        <div className="cursorArea"></div>
                                        <span className="text">琥珀/蜜蜡</span>
                                    </div>
                                    <div className="categoryItem">
                                        <div className="categoryIcon lazyLoad">
                                            <img src={"http://w.weipaitang.com/res/img/category/1_1004.jpg?t=10"}/>
                                        </div>
                                        <div className="cursorArea"></div>
                                        <span className="text">琥珀/蜜蜡</span>
                                    </div>
                                </div>
                                <div className="categoryList" category="-1">
                                    <div className="title">书画篆刻<a className="all" href="/category/detail/0">查看全部</a></div>
                                    <div className="categoryItem">
                                        <div className="categoryIcon lazyLoad">
                                            <img src={"http://w.weipaitang.com/res/img/category/1_1004.jpg?t=10"}/>
                                        </div>
                                        <div className="cursorArea"></div>
                                        <span className="text">琥珀/蜜蜡</span>
                                    </div>
                                    <div className="categoryItem">
                                        <div className="categoryIcon lazyLoad">
                                            <img src={"http://w.weipaitang.com/res/img/category/1_1004.jpg?t=10"}/>
                                        </div>
                                        <div className="cursorArea"></div>
                                        <span className="text">琥珀/蜜蜡</span>
                                    </div>
                                    <div className="categoryItem">
                                        <div className="categoryIcon lazyLoad">
                                            <img src={"http://w.weipaitang.com/res/img/category/1_1004.jpg?t=10"}/>
                                        </div>
                                        <div className="cursorArea"></div>
                                        <span className="text">琥珀/蜜蜡</span>
                                    </div>
                                    <div className="categoryItem">
                                        <div className="categoryIcon lazyLoad">
                                            <img src={"http://w.weipaitang.com/res/img/category/1_1004.jpg?t=10"}/>
                                        </div>
                                        <div className="cursorArea"></div>
                                        <span className="text">琥珀/蜜蜡</span>
                                    </div>
                                    <div className="categoryItem">
                                        <div className="categoryIcon lazyLoad">
                                            <img src={"http://w.weipaitang.com/res/img/category/1_1004.jpg?t=10"}/>
                                        </div>
                                        <div className="cursorArea"></div>
                                        <span className="text">琥珀/蜜蜡</span>
                                    </div>
                                    <div className="categoryItem">
                                        <div className="categoryIcon lazyLoad">
                                            <img src={"http://w.weipaitang.com/res/img/category/1_1004.jpg?t=10"}/>
                                        </div>
                                        <div className="cursorArea"></div>
                                        <span className="text">琥珀/蜜蜡</span>
                                    </div>
                                    <div className="categoryItem">
                                        <div className="categoryIcon lazyLoad">
                                            <img src={"http://w.weipaitang.com/res/img/category/1_1004.jpg?t=10"}/>
                                        </div>
                                        <div className="cursorArea"></div>
                                        <span className="text">琥珀/蜜蜡</span>
                                    </div>
                                    <div className="categoryItem">
                                        <div className="categoryIcon lazyLoad">
                                            <img src={"http://w.weipaitang.com/res/img/category/1_1004.jpg?t=10"}/>
                                        </div>
                                        <div className="cursorArea"></div>
                                        <span className="text">琥珀/蜜蜡</span>
                                    </div>
                                    <div className="categoryItem">
                                        <div className="categoryIcon lazyLoad">
                                            <img src={"http://w.weipaitang.com/res/img/category/1_1004.jpg?t=10"}/>
                                        </div>
                                        <div className="cursorArea"></div>
                                        <span className="text">琥珀/蜜蜡</span>
                                    </div>
                                    <div className="categoryItem">
                                        <div className="categoryIcon lazyLoad">
                                            <img src={"http://w.weipaitang.com/res/img/category/1_1004.jpg?t=10"}/>
                                        </div>
                                        <div className="cursorArea"></div>
                                        <span className="text">琥珀/蜜蜡</span>
                                    </div>
                                </div>
                                <div className="categoryList" category="-1">
                                    <div className="title">茶酒滋补<a className="all" href="/category/detail/0">查看全部</a></div>
                                    <div className="categoryItem">
                                        <div className="categoryIcon lazyLoad">
                                            <img src={"http://w.weipaitang.com/res/img/category/1_1004.jpg?t=10"}/>
                                        </div>
                                        <div className="cursorArea"></div>
                                        <span className="text">琥珀/蜜蜡</span>
                                    </div>
                                    <div className="categoryItem">
                                        <div className="categoryIcon lazyLoad">
                                            <img src={"http://w.weipaitang.com/res/img/category/1_1004.jpg?t=10"}/>
                                        </div>
                                        <div className="cursorArea"></div>
                                        <span className="text">琥珀/蜜蜡</span>
                                    </div>
                                    <div className="categoryItem">
                                        <div className="categoryIcon lazyLoad">
                                            <img src={"http://w.weipaitang.com/res/img/category/1_1004.jpg?t=10"}/>
                                        </div>
                                        <div className="cursorArea"></div>
                                        <span className="text">琥珀/蜜蜡</span>
                                    </div>
                                    <div className="categoryItem">
                                        <div className="categoryIcon lazyLoad">
                                            <img src={"http://w.weipaitang.com/res/img/category/1_1004.jpg?t=10"}/>
                                        </div>
                                        <div className="cursorArea"></div>
                                        <span className="text">琥珀/蜜蜡</span>
                                    </div>
                                    <div className="categoryItem">
                                        <div className="categoryIcon lazyLoad">
                                            <img src={"http://w.weipaitang.com/res/img/category/1_1004.jpg?t=10"}/>
                                        </div>
                                        <div className="cursorArea"></div>
                                        <span className="text">琥珀/蜜蜡</span>
                                    </div>
                                    <div className="categoryItem">
                                        <div className="categoryIcon lazyLoad">
                                            <img src={"http://w.weipaitang.com/res/img/category/1_1004.jpg?t=10"}/>
                                        </div>
                                        <div className="cursorArea"></div>
                                        <span className="text">琥珀/蜜蜡</span>
                                    </div>
                                    <div className="categoryItem">
                                        <div className="categoryIcon lazyLoad">
                                            <img src={"http://w.weipaitang.com/res/img/category/1_1004.jpg?t=10"}/>
                                        </div>
                                        <div className="cursorArea"></div>
                                        <span className="text">琥珀/蜜蜡</span>
                                    </div>
                                    <div className="categoryItem">
                                        <div className="categoryIcon lazyLoad">
                                            <img src={"http://w.weipaitang.com/res/img/category/1_1004.jpg?t=10"}/>
                                        </div>
                                        <div className="cursorArea"></div>
                                        <span className="text">琥珀/蜜蜡</span>
                                    </div>
                                    <div className="categoryItem">
                                        <div className="categoryIcon lazyLoad">
                                            <img src={"http://w.weipaitang.com/res/img/category/1_1004.jpg?t=10"}/>
                                        </div>
                                        <div className="cursorArea"></div>
                                        <span className="text">琥珀/蜜蜡</span>
                                    </div>
                                    <div className="categoryItem">
                                        <div className="categoryIcon lazyLoad">
                                            <img src={"http://w.weipaitang.com/res/img/category/1_1004.jpg?t=10"}/>
                                        </div>
                                        <div className="cursorArea"></div>
                                        <span className="text">琥珀/蜜蜡</span>
                                    </div>
                                </div>
                                <div className="categoryList" category="-1">
                                    <div className="title">紫砂陶瓷<a className="all" href="/category/detail/0">查看全部</a></div>
                                    <div className="categoryItem">
                                        <div className="categoryIcon lazyLoad">
                                            <img src={"http://w.weipaitang.com/res/img/category/1_1004.jpg?t=10"}/>
                                        </div>
                                        <div className="cursorArea"></div>
                                        <span className="text">琥珀/蜜蜡</span>
                                    </div>

                                    <div className="categoryItem">
                                        <div className="categoryIcon lazyLoad">
                                            <img src={"http://w.weipaitang.com/res/img/category/1_1004.jpg?t=10"}/>
                                        </div>
                                        <div className="cursorArea"></div>
                                        <span className="text">琥珀/蜜蜡</span>
                                    </div>
                                    <div className="categoryItem">
                                        <div className="categoryIcon lazyLoad">
                                            <img src={"http://w.weipaitang.com/res/img/category/1_1004.jpg?t=10"}/>
                                        </div>
                                        <div className="cursorArea"></div>
                                        <span className="text">琥珀/蜜蜡</span>
                                    </div>
                                    <div className="categoryItem">
                                        <div className="categoryIcon lazyLoad">
                                            <img src={"http://w.weipaitang.com/res/img/category/1_1004.jpg?t=10"}/>
                                        </div>
                                        <div className="cursorArea"></div>
                                        <span className="text">琥珀/蜜蜡</span>
                                    </div>
                                    <div className="categoryItem">
                                        <div className="categoryIcon lazyLoad">
                                            <img src={"http://w.weipaitang.com/res/img/category/1_1004.jpg?t=10"}/>
                                        </div>
                                        <div className="cursorArea"></div>
                                        <span className="text">琥珀/蜜蜡</span>
                                    </div>
                                    <div className="categoryItem">
                                        <div className="categoryIcon lazyLoad">
                                            <img src={"http://w.weipaitang.com/res/img/category/1_1004.jpg?t=10"}/>
                                        </div>
                                        <div className="cursorArea"></div>
                                        <span className="text">琥珀/蜜蜡</span>
                                    </div>
                                </div>
                                <div className="categoryList" category="-1">
                                    <div className="title">工艺作品<a className="all" href="/category/detail/0">查看全部</a></div>
                                    <div className="categoryItem">
                                        <div className="categoryIcon lazyLoad">
                                            <img src={"http://w.weipaitang.com/res/img/category/1_1004.jpg?t=10"}/>
                                        </div>
                                        <div className="cursorArea"></div>
                                        <span className="text">琥珀/蜜蜡</span>
                                    </div>
                                   <div className="categoryItem">
                                        <div className="categoryIcon lazyLoad">
                                            <img src={"http://w.weipaitang.com/res/img/category/1_1004.jpg?t=10"}/>
                                        </div>
                                        <div className="cursorArea"></div>
                                        <span className="text">琥珀/蜜蜡</span>
                                    </div>
                                   <div className="categoryItem">
                                        <div className="categoryIcon lazyLoad">
                                            <img src={"http://w.weipaitang.com/res/img/category/1_1004.jpg?t=10"}/>
                                        </div>
                                        <div className="cursorArea"></div>
                                        <span className="text">琥珀/蜜蜡</span>
                                    </div>
                                   <div className="categoryItem">
                                        <div className="categoryIcon lazyLoad">
                                            <img src={"http://w.weipaitang.com/res/img/category/1_1004.jpg?t=10"}/>
                                        </div>
                                        <div className="cursorArea"></div>
                                        <span className="text">琥珀/蜜蜡</span>
                                    </div>
                                   <div className="categoryItem">
                                        <div className="categoryIcon lazyLoad">
                                            <img src={"http://w.weipaitang.com/res/img/category/1_1004.jpg?t=10"}/>
                                        </div>
                                        <div className="cursorArea"></div>
                                        <span className="text">琥珀/蜜蜡</span>
                                    </div>
                                   <div className="categoryItem">
                                        <div className="categoryIcon lazyLoad">
                                            <img src={"http://w.weipaitang.com/res/img/category/1_1004.jpg?t=10"}/>
                                        </div>
                                        <div className="cursorArea"></div>
                                        <span className="text">琥珀/蜜蜡</span>
                                    </div>
                                   <div className="categoryItem">
                                        <div className="categoryIcon lazyLoad">
                                            <img src={"http://w.weipaitang.com/res/img/category/1_1004.jpg?t=10"}/>
                                        </div>
                                        <div className="cursorArea"></div>
                                        <span className="text">琥珀/蜜蜡</span>
                                    </div>
                                   <div className="categoryItem">
                                        <div className="categoryIcon lazyLoad">
                                            <img src={"http://w.weipaitang.com/res/img/category/1_1004.jpg?t=10"}/>
                                        </div>
                                        <div className="cursorArea"></div>
                                        <span className="text">琥珀/蜜蜡</span>
                                    </div>
                                   <div className="categoryItem">
                                        <div className="categoryIcon lazyLoad">
                                            <img src={"http://w.weipaitang.com/res/img/category/1_1004.jpg?t=10"}/>
                                        </div>
                                        <div className="cursorArea"></div>
                                        <span className="text">琥珀/蜜蜡</span>
                                    </div>
                                   <div className="categoryItem">
                                        <div className="categoryIcon lazyLoad">
                                            <img src={"http://w.weipaitang.com/res/img/category/1_1004.jpg?t=10"}/>
                                        </div>
                                        <div className="cursorArea"></div>
                                        <span className="text">琥珀/蜜蜡</span>
                                    </div>
                                   <div className="categoryItem">
                                        <div className="categoryIcon lazyLoad">
                                            <img src={"http://w.weipaitang.com/res/img/category/1_1004.jpg?t=10"}/>
                                        </div>
                                        <div className="cursorArea"></div>
                                        <span className="text">琥珀/蜜蜡</span>
                                    </div>
                                   <div className="categoryItem">
                                        <div className="categoryIcon lazyLoad">
                                            <img src={"http://w.weipaitang.com/res/img/category/1_1004.jpg?t=10"}/>
                                        </div>
                                        <div className="cursorArea"></div>
                                        <span className="text">琥珀/蜜蜡</span>
                                    </div>
                                    <div className="categoryItem">
                                        <div className="categoryIcon lazyLoad">
                                            <img src={"http://w.weipaitang.com/res/img/category/1_1004.jpg?t=10"}/>
                                        </div>
                                        <div className="cursorArea"></div>
                                        <span className="text">琥珀/蜜蜡</span>
                                    </div>
                                    <div className="categoryItem">
                                        <div className="categoryIcon lazyLoad">
                                            <img src={"http://w.weipaitang.com/res/img/category/1_1004.jpg?t=10"}/>
                                        </div>
                                        <div className="cursorArea"></div>
                                        <span className="text">琥珀/蜜蜡</span>
                                    </div>
                                    <div className="categoryItem">
                                        <div className="categoryIcon lazyLoad">
                                            <img src={"http://w.weipaitang.com/res/img/category/1_1004.jpg?t=10"}/>
                                        </div>
                                        <div className="cursorArea"></div>
                                        <span className="text">琥珀/蜜蜡</span>
                                    </div>
                                    <div className="categoryItem">
                                        <div className="categoryIcon lazyLoad">
                                            <img src={"http://w.weipaitang.com/res/img/category/1_1004.jpg?t=10"}/>
                                        </div>
                                        <div className="cursorArea"></div>
                                        <span className="text">琥珀/蜜蜡</span>
                                    </div>
                                    <div className="categoryItem">
                                        <div className="categoryIcon lazyLoad">
                                            <img src={"http://w.weipaitang.com/res/img/category/1_1004.jpg?t=10"}/>
                                        </div>
                                        <div className="cursorArea"></div>
                                        <span className="text">琥珀/蜜蜡</span>
                                    </div>
                                    <div className="categoryItem">
                                        <div className="categoryIcon lazyLoad">
                                            <img src={"http://w.weipaitang.com/res/img/category/1_1004.jpg?t=10"}/>
                                        </div>
                                        <div className="cursorArea"></div>
                                        <span className="text">琥珀/蜜蜡</span>
                                    </div>
                                    <div className="categoryItem">
                                        <div className="categoryIcon lazyLoad">
                                            <img src={"http://w.weipaitang.com/res/img/category/1_1004.jpg?t=10"}/>
                                        </div>
                                        <div className="cursorArea"></div>
                                        <span className="text">琥珀/蜜蜡</span>
                                    </div>
                                    <div className="categoryItem">
                                        <div className="categoryIcon lazyLoad">
                                            <img src={"http://w.weipaitang.com/res/img/category/1_1004.jpg?t=10"}/>
                                        </div>
                                        <div className="cursorArea"></div>
                                        <span className="text">琥珀/蜜蜡</span>
                                    </div>
                                    <div className="categoryItem">
                                        <div className="categoryIcon lazyLoad">
                                            <img src={"http://w.weipaitang.com/res/img/category/1_1004.jpg?t=10"}/>
                                        </div>
                                        <div className="cursorArea"></div>
                                        <span className="text">琥珀/蜜蜡</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>


                <FootTabBar></FootTabBar>
            </div>
        )
    }
}

export { CateIndex as default};