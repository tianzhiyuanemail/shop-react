import React from 'react';
import {Link} from 'react-router-dom';
import $ from 'jquery';
import "./common.scss"

class ItemListOne extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data:[],
            hasMore: true,
            totalCount: 2,
            index:  1
        };
        this.getProList = this.getProList.bind(this)
    }
    componentDidMount() {
        this.getProList(this.state.index);
    }

    getProList(index){
        $.get("/tbk/getTodaySelection.json",{pageNo:index}, function(res) {
            var arr = this.state.data;
            if (index===1){
                arr=res.data;
            }else{
                arr.push(...res.data);
            }
            this.setState({
                data:arr,
                totalCount:res.data.totalCount
            });
        }.bind(this));
    }

    render() {
        const listItems = this.state.data.map((obj,index) => {
            var link= obj.numIid;
            return (
                <div key={index}>
                    <Link to={'/item/'+link} >
                        <div  className="goodsOne">
                            <div  className="cover-image">
                                <img src="//oss.lanlanlife.com/758767062f474f4801d22baf0af371ef_100x100.png"  className="tags-img"/>
                                <img src={obj.pictUrl+"_300x300q90.jpg"} className="image"/>
                            </div>
                            <div  className="item-info">
                                <h1 >
                                    <img src= {obj.userType===1?"http://oss1.lanlanlife.com/f87493c5f309d8b282476c232df6bd4b_26x26.png":"http://oss1.lanlanlife.com/f87493c5f309d8b282476c232df6bd4b_26x26.png"}  className="tabsImg"/>
                                    {obj.title}
                                </h1>
                                <div>
                                    <div  className="price">
                                        <p>价格
                                            <span>¥{obj.afterCouponPrice}
                                            </span>
                                        </p>
                                        <span className={"finalPrice"}> ¥{obj.zkFinalPrice}</span>
                                    </div>
                                </div>
                                <div>
                                    <div className="volume">
                                        <span >月销{obj.volume} 件</span>
                                        <span className={"buy"} >  立即购买</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </Link>
                </div>
            )
        });
        return (
            <div className={"ItemListOne"}>
                {listItems}
            </div>
        )
    }
}

export { ItemListOne as default};

