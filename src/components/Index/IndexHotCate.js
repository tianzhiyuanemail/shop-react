import React from 'react';

import { Carousel, WingBlank } from 'antd-mobile';
import $ from 'jquery';

//轮播活动组件
class IndexHotCate extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            bannerList: [],
            imgHeight: 176,
        };
    }

    componentDidMount() {

        $.get("/tbk/banners.json",{ parentId:0}, function(res) {
            this.setState({
                bannerList:res.data,
            });
        }.bind(this));
    }
    render() {

        const bannerList = this.state.bannerList.map((obj) => {
            return (
                    <a
                        key={obj.id}
                        href={obj.bannerUrl}
                        style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                    >
                        <img
                            src={obj.bannerImg}
                            alt=""
                            style={{ width: '100%', verticalAlign: 'top' }}
                            onLoad={() => {
                                window.dispatchEvent(new Event('resize'));
                                this.setState({ imgHeight: 'auto' });
                            }}
                        />
                    </a>
                )
        })

        return (
            <div className={"IndexHotCate"}>
                 <ul>
                <li>
                    <a>
                        <img  src={"http://shuzibika.com/tbk/butileful.png"} />
                        <span>俩字</span>
                    </a>
                </li>
                <li>
                    <a>
                        <img  src={"http://shuzibika.com/tbk/butileful.png"} />
                        <span>俩字</span>
                    </a>
                </li>
                <li>
                    <a>
                        <img  src={"http://shuzibika.com/tbk/butileful.png"} />
                        <span>俩字</span>
                    </a>
                </li>
                <li>
                    <a>
                        <img  src={"http://shuzibika.com/tbk/butileful.png"} />
                        <span>俩字</span>
                    </a>
                </li>
                <li>
                    <a>
                        <img  src={"http://shuzibika.com/tbk/butileful.png"} />
                        <span>俩字</span>
                    </a>
                </li>
            </ul>
                <ul>
                    <li>
                        <a>
                            <img  src={"http://shuzibika.com/tbk/butileful.png"} />
                            <span>俩字</span>
                        </a>
                    </li>
                    <li>
                        <a>
                            <img  src={"http://shuzibika.com/tbk/butileful.png"} />
                            <span>俩字</span>
                        </a>
                    </li>
                    <li>
                        <a>
                            <img  src={"http://shuzibika.com/tbk/butileful.png"} />
                            <span>俩字</span>
                        </a>
                    </li>
                    <li>
                        <a>
                            <img  src={"http://shuzibika.com/tbk/butileful.png"} />
                            <span>俩字</span>
                        </a>
                    </li>
                    <li>
                        <a>
                            <img  src={"http://shuzibika.com/tbk/butileful.png"} />
                            <span>俩字</span>
                        </a>
                    </li>
                </ul>

            </div>
        );
    }
}

export {IndexHotCate as default}