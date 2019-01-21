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

        };
    }
    componentDidMount() {

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
                    <aside class="mainport-left">
                        <ul class="categoryFirst">
                            <li class="active">柴米油盐<span></span></li>
                            <li>柴米油盐1</li>
                            <li>柴米油盐2</li>
                            <li>柴米油盐3</li>
                            <li>柴米油盐4</li>
                            <li>柴米油盐1</li>
                            <li>柴米油盐2</li>
                            <li>柴米油盐3</li>
                            <li>柴米油盐4</li>
                            <li>柴米油盐1</li>
                            <li>柴米油盐2</li>
                            <li>柴米油盐3</li>
                            <li>柴米油盐4</li>
                        </ul>
                    </aside>
                    <section class="mainport">
                        <article class="mainport-right">
                            <div class="banner img-responsive"><img src="http://shuzibika.com/tbk/butileful.png" alt="" /></div>
                            <div class="goods-list" id="goods-list1">
                                <h3 class="font19">柴米油盐</h3>
                                <ul>
                                    <li>
                                        <a href="">
                                            <figure class="mainFigure">
                                                <img src="../Images/goods.png" alt=""/>
                                                    <figcaption>
                                                        <div class="goods-title">
                                                            <strong class="color-a1 font25">金龙鱼 葵花籽清油</strong>
                                                        </div>
                                                    </figcaption>
                                            </figure>
                                        </a>

                                    </li>
                                    <li>
                                        <a href="">
                                            <figure class="mainFigure">
                                                <img src="../Images/goods.png" alt=""/>
                                                    <figcaption>
                                                        <div class="goods-title">
                                                            <strong class="color-a1 font25">金龙鱼 葵花籽清油</strong>
                                                        </div>
                                                    </figcaption>
                                            </figure>
                                        </a>

                                    </li>
                                    <li>
                                        <a href="">
                                            <figure class="mainFigure">
                                                <img src="../Images/goods.png" alt=""/>
                                                    <figcaption>
                                                        <div class="goods-title">
                                                            <strong class="color-a1 font25">金龙鱼 葵花籽清油</strong>
                                                        </div>
                                                    </figcaption>
                                            </figure>
                                        </a>

                                    </li>
                                </ul>

                                <h3 class="font19">柴米油盐</h3>
                                <ul>
                                    <li>
                                        <a href="">
                                            <figure class="mainFigure">
                                                <img src="../Images/goods.png" alt=""/>
                                                    <figcaption>
                                                        <div class="goods-title">
                                                            <strong class="color-a1 font25">金龙鱼 葵花籽清油</strong>
                                                        </div>
                                                    </figcaption>
                                            </figure>
                                        </a>

                                    </li>
                                    <li>
                                        <a href="">
                                            <figure class="mainFigure">
                                                <img src="../Images/goods.png" alt=""/>
                                                    <figcaption>
                                                        <div class="goods-title">
                                                            <strong class="color-a1 font25">金龙鱼 葵花籽清油</strong>
                                                        </div>
                                                    </figcaption>
                                            </figure>
                                        </a>

                                    </li>
                                    <li>
                                        <a href="">
                                            <figure class="mainFigure">
                                                <img src="../Images/goods.png" alt=""/>
                                                    <figcaption>
                                                        <div class="goods-title">
                                                            <strong class="color-a1 font25">金龙鱼 葵花籽清油</strong>
                                                        </div>
                                                    </figcaption>
                                            </figure>
                                        </a>

                                    </li>
                                </ul>
                            </div>

                        </article>
                    </section>
                    <div class="clearfix"></div>
                </div>


                <FootTabBar></FootTabBar>
            </div>
        )
    }
}

export { CateIndex as default};