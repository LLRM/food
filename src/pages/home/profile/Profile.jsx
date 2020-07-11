import React, { Component } from 'react';
import {Switch} from 'antd-mobile';
import {connect} from 'react-redux';
import {SETSHOW} from '../action-types';
@connect(state=>({
    checked:state.home.isShow
}),dispatch=>({
    changeStatus(checked){
        dispatch({
            type:SETSHOW,
            data:checked
        })
    }
})
)

class Profile extends Component{
    // state={
    //     checked:false
    // }
    render() {
        return(
            <div>
                是否显示地图：<Switch
                    checked={this.props.checked}
                    onChange={
                            checked=>{
                                this.props.changeStatus(checked);
                                console.log(checked)
                            }
                    }
                />
                {/* <Switch
                    checked={this.state.checked}
                    onChange={()=>{
                        this.setState({
                            checked:!this.state.checked
                        })
                    }}
                /> */}
            </div>
        )
    }
}

export default Profile