import React from 'react';
import {BrowserRouter, HashRouter, Link, Redirect, Route, Switch} from 'react-router-dom';


import Index from '../components/Index/Index';
import CateIndex from '../components/Cate/CateIndex';

const RouterConfig = () => (
    <Switch>
        <Redirect exact from="/" to="/index"/>
        <Route exact path='/index' component={Index} />
        <Route exact path='/cate' component={CateIndex} />
        {/*<Route exact path='/cateProList/:cateId/:cateName' component={CateProHead} />*/}
        {/*<Route exact path='/item/:productId' component={ItemIndex} />*/}
        {/*<Route exact path='/9' component={NineIndex}/>*/}
        {/*<Route exact path='/search' component={SearchIndex}/>*/}
            {/*/!*user*!/*/}
        {/*<Route exact path='/my' component={MyIndex}/>*/}
        {/*<Route exact path='/checkIn/:userId' component={CheckInIndex}/>*/}
        {/*<Route exact path='/login' component={LoginIndex}/>*/}
            {/*/!*other*!/*/}
        {/*<Route exact path='/downloadApp' component={DownloadApp}/>*/}

        {/*<Route exact path='/test' component={test}/>*/}
    </Switch>
)
export default RouterConfig
