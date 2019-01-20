import React from 'react';

import { NoticeBar, WhiteSpace } from 'antd-mobile';

import "./index.scss"

class IndexNoticeBar extends React.Component{

    render(){
        return (
            <div className={"IndexNoticeBar"}>
                <WhiteSpace size="lg" />
                <NoticeBar
                    marqueeProps={{ loop: true, style: { padding: '0 7.5px',
                                                        color: '#0c0808',
                                                        fontSize: '14px',
                                                        wordSpacing: '18px',
                                                        letterSspacing: '1px'} }}>
                    来自山东的亮亮3秒前下了一单  来自山东的亮亮3秒前下了一单
                </NoticeBar>
            </div>
        )
    }
}

export {IndexNoticeBar as default}

