import ReactPullLoad, {STATS} from 'react-pullload'
import React from 'react';
import HeadSearch from '../common/HeadSearch'
import IndexBanner from './IndexBanner'
import IndexHotCate from './IndexHotCate'
import IndexNoticeBar from './IndexNoticeBar'
import IndexActivityBar from './IndexActivityBar'
import {Link, Prompt} from 'react-router-dom';
import $ from 'jquery';
import './index.scss';

class IndexItemList extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            data:[],
            hasMore: true,
            action: STATS.init,
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

    //执行加载或者刷新
    handleAction = (action) => {
        // console.info(action, this.state.action,action === this.state.action);

        if(action === this.state.action){
            return false
        }

        if(action === STATS.refreshing){//刷新
            this.handRefreshing();
        } else if(action === STATS.loading){//加载更多
            this.handLoadMore();
        } else{
            this.setState({
                action: action
            })
        }
    }

    //刷新
    handRefreshing = () =>{
        if(STATS.refreshing === this.state.action){
            return false
        }
        this.getProList(1);
        this.setState({
            action: STATS.refreshing,
        })
    };

    //加载
    handLoadMore = () => {
        if(STATS.loading === this.state.action){
            return false
        }
        if(this.state.index === this.state.totalCount){
            this.setState({
                action: STATS.reset,
                hasMore: false
            });
        } else{
            this.getProList(this.state.index);
            this.setState({
                action: STATS.loading
            })
        }

    };

    //监听数据变化
    shouldComponentUpdate (){
        if(this.state.action === STATS.refreshing){//刷新
            this.setState({
                action: STATS.refreshed,
                index:  1
            })
        } else if(this.state.action === STATS.loading||this.state.action === STATS.init){
            this.setState({
                action: STATS.reset,
                index:  this.state.index+1
            });
        }
        return true;
    }
    render(){
        const {hasMore,action} = this.state;
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
            <div>
                <ReactPullLoad
                    downEnough={0}
                    action={this.state.action}
                    handleAction={this.handleAction}
                    hasMore={hasMore}
                    style={{paddingTop: 0}}
                    distanceBottom={1000}>
                    <HeadSearch></HeadSearch>
                    <IndexBanner></IndexBanner>
                    <IndexNoticeBar></IndexNoticeBar>
                    <IndexHotCate></IndexHotCate>
                    <IndexActivityBar></IndexActivityBar>
                    {/*商品列表*/}
                    <div className={"IndexItemList"}>
                        {listItems}
                    </div>
                </ReactPullLoad>
            </div>
        )
    }
}

export default IndexItemList