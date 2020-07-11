import React, { Component } from 'react';
import { Grid } from 'antd-mobile';
import { get } from '../../../utils/http'

import {HotCateWrap} from './styledCookbook';
// const data1 = Array.from(new Array(9)).map(() => ({
//     title: 'xixi',
//     icon: 'https://gw.alipayobjects.com/zos/rmsportal/WXoqXTHrSnRcUwEaQgXJ.png',
// }));

export default class HotCate extends Component {
    state={
        hotList:[]
    }
    async componentDidMount(){
        let result=await get({
            url:"/api/hotcate"
        })
        let data=result.map((value)=>({
            key:value.id,
            title:value.title,
            icon:value.img
        })
        )
        this.setState({
            hotList:data
        })
    }
        _renderItem = dataItem=>(
            <div className="item">
                {
                    dataItem.icon && <img src={dataItem.icon} alt=""/>
                }
                <span>{dataItem.title}</span>
            </div>
        )
        
        render() {
            return (
                <HotCateWrap>
                    <header>热门分类</header>
                    
                    <Grid data={this.state.hotList}
                    columnNum={3}
                    hasLine={false}
                    renderItem={this._renderItem}
                    />
                </HotCateWrap>
            )
        }    
        
}
