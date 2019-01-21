import React from 'react';
import FootTabBar from '../common/FootTabBar'

import IndexItemList from './IndexItemList'
// import IndexItemListOne from './IndexItemListOne'
import BackTop from '../common/BackTop'
import { Carousel, WingBlank ,Button, Toast} from 'antd-mobile';
import $ from 'jquery';


import "./index.scss"
class Index extends React.Component{

    constructor(props) {
        super(props);
        this.state = {

        };
    }
    componentDidMount() {

    }
    render(){
        return(
            <div className={"Index"}>
                <IndexItemList></IndexItemList>
                <BackTop></BackTop>
                <FootTabBar></FootTabBar>
            </div>
        )
    }
}

export { Index as default};