import ReactPullLoad, {STATS} from 'react-pullload'
import React from 'react';
import {Link, Prompt} from 'react-router-dom';


class ProList extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            hasMore: true,
            action: STATS.init,
            totalCount: this.props.totalCount,
            index:  this.props.pageNo
        }
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
        this.props.reLoad(1);

        this.setState({
            action: STATS.refreshing,
        })
    };

    //加载
    handLoadMore = () => {
        if(STATS.loading === this.state.action){
            return false
        }
        // if(this.state.index === this.state.totalCount){ 暂时屏蔽总条数限制
        if(false){
            this.setState({
                action: STATS.reset,
                hasMore: false
            });
        } else{
            this.props.reLoad(this.state.index);
            this.setState({
                action: STATS.loading
            })
        }

    };

    //监听数据变化
    componentWillReceiveProps(nextProps){

        if(this.state.action === STATS.refreshing){//刷新
            this.setState({
                action: STATS.refreshed,
                totalCount: this.props.totalCount,
                index:  1
            })
        } else if(this.state.action === STATS.loading||this.state.action === STATS.init){
            this.setState({
                action: STATS.reset,
                totalCount: this.props.totalCount,
                index:  this.props.pageNo+1 //loading more test time limit
            })
        }
    }
    render(){
        const {hasMore,action} = this.state;
        const listItems = this.props.productList.map((obj,index) => {
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
                    {/*商品列表*/}
                    <div className={"IndexItemList"}>
                        {listItems}
                    </div>
                </ReactPullLoad>
            </div>
        )
    }
}

export default ProList