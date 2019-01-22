import React from 'react';
import FootTabBar from '../common/FootTabBar'
import {Link, Prompt} from 'react-router-dom';
import {Drawer, Icon, List, NavBar} from 'antd-mobile';
import $ from 'jquery';


import "./cate.scss"

var doing = true;
var category = -1;

//滚动触发菜单栏
function pageScroll() {
    var _scrollTop = $(".categoryBox").scrollTop();
    var _height = -(document.documentElement.clientHeight || $(window).height()) / 2 + 25;
    var index = 1;
    $(".categoryList").each(function() {
        _height += $(this).height();
        if(_height > _scrollTop) {
            return;
        }
        index++;
    });
    $(".menu .menuItem").removeClass("selected");
    $(".menu .menuItem:nth-child(" + index + ")").addClass("selected");
}

$(function () {
    var _category = window.location.search.match(/[\?&]category=(\d+)&?/);
    if (null != _category) {
        category = _category[1];
    }

    //点击菜单定位
    $(".menu").on("click", ".menuItem", function () {
        doing = false;
        var self = $(this);
        if (!self.hasClass("selected")) {
            category = self.attr("category");
            $(".menu .menuItem").removeClass("selected");
            self.addClass("selected");
            $(".categoryBox").scrollTop(self.attr("scroll"));
        }
        setTimeout(function() {
            doing = true;
        }, 100)
    });

    //进入分类
    $(".categoryItem").on("click", function () {
        var url = $(this).data("url");
        if(!url) {
            return false;
        }
        $(this).addClass("clicked");
        setTimeout(function() {
            $(this).removeClass('clicked');
        }, 1000);
        if (!$.os.android || ignorePhoneModel.indexOf(getPhoneModel()) == -1) {
            var scrollTop = $("body").scrollTop();
            history.replaceState({scrollTop: scrollTop}, document.title, "?category=" + category);
        }
        var secCategory = $(this).data('seccategory');
//            wptRedirect(url, 200);
    });

    //回退定位高度
    if (!$.os.android || ignorePhoneModel.indexOf(getPhoneModel()) == -1) {
        window.onpopstate = function (event) {
            if (null != event.state && 'undefined' != typeof event.state.scrollTop) {
                $("body").scrollTop(event.state.scrollTop);
            }
        };
    }

    // 初始化左边栏选项
    $(".menu .menuItem[category='" + category + "']").addClass('selected');
    $(".categoryList[category='" + category + "']").show();

    //计算各分类高度
    var _dataHeight = -50;
    $(".categoryList").each(function(i, item) {
        if(i == 0) {
            $(".menu .menuItem:nth-child(" + (1) + ")").attr("scroll", 0);
        } else {
            $(".menu .menuItem:nth-child(" + (i + 1) + ")").attr("scroll", _dataHeight);
        }
        _dataHeight += $(item).height();
    });

    //页面滚动
    $(".categoryBox").on('scroll', function (e) {
        e.stopPropagation();
        e.preventDefault();
        if(doing) {
            pageScroll();
        }
    });

    pageScroll();

    //加载lazy图片
    $.picLazyLoad({
        seletctor: ".lazyLoad",
        threshold: $(window).height() * 1.5,
        scrollArea: $(".categoryBox")
    });

    $(".menuItem[category='-1']").click();
});


class CateIndex extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            dataHeight:-50
        };
        this.categoryList = this.categoryList.bind(this)
    }
    componentDidMount() {
        this.categoryList();


        //加载lazy图片
        // $.picLazyLoad({
        //     seletctor: ".lazyLoad",
        //     threshold: $(window).height() * 1.5,
        //     scrollArea: $(".categoryBox")
        // });
    }
    categoryList(){
        $(".categoryList").each(function(i, item) {
            if(i == 0) {
                $(".menu .menuItem:nth-child(" + (1) + ")").attr("scroll", 0);
            } else {
                $(".menu .menuItem:nth-child(" + (i + 1) + ")").attr("scroll", this.state.dataHeight);
            }
            this.setState({
                dataHeight:$(item).height(),
            });
        });
    }


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
                            <div className="menuItem" category="-1"  >推荐分类</div>
                            <div className="menuItem" category="0"   >文玩杂项</div>
                            <div className="menuItem" category="1"   >玉翠珠宝</div>
                            <div className="menuItem" category="2"  >书画篆刻</div>
                            <div className="menuItem" category="3"   >茶酒滋补</div>
                            <div className="menuItem" category="4"   >紫砂陶瓷</div>
                            <div className="menuItem" category="5"   >工艺作品</div>
                            <div className="menuItem" category="7"   >花鸟文娱</div>
                        </div>

                        <div className="categoryBox">
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