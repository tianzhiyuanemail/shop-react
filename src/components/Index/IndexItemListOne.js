import React from 'react';
import $ from 'jquery';
import ProList from '../common/ProList';

class IndexItemListOne extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            productList:[],
            sort:1,
            pageNo:1,
            totalCount:1,
            cateId:this.props.cateId
        };
        this.reLoad = this.reLoad.bind(this);
    }

    componentDidMount() {
        var    sort   = this.state.sort;
        var    pageNo = this.state.pageNo;
        var    cateId    = this.props.cateId;

        this.getProductList(cateId,sort,pageNo,null);
    }



    //加载刷新
    reLoad(event){
        var    sort     = this.state.sort;
        var    cateId    = this.props.cateId;

        this.setState(
            {
                pageNo:event
            }
        );
        this.getProductList(cateId,sort,event,null)
    }

    //更新商品数据
    getProductList(cateId,sort,pageNo,query){

        $.get("/tbk/getTodaySelection.json",{ cateId: cateId, sort: null ,pageNo:pageNo,query:query}, function(res) {

            var arr = this.state.productList;
            if (pageNo===1){
                arr=res.data;
            }else{
                arr.push(...res.data);
            }

            this.setState({
                productList:arr,
                totalCount:res.totalCount,
                pageNo:pageNo,
            });

        }.bind(this));
    }


    render(){

        return(
            <div className={"IndexItemList"}>
                {/*商品list组件*/}
                <ProList
                    reLoad={this.reLoad.bind(this)}
                    totalCount={this.state.totalCount}
                    productList={this.state.productList}
                    pageNo={this.state.pageNo}
                ></ProList>
            </div>
        )
    }
}

export { IndexItemListOne as default};