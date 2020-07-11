import React, { Component } from 'react';
import Header from "./Header";
import Swiper from "./swiper";
import Search from "@/search/Search";
import HotCate from "./HotCate";
import Hotlist from "./Hotlist";
export default class Cookbook extends Component {
    render() {
        return(
            <div>
                <Header/>
                <Swiper/>
                <Search/>
                <HotCate/>
                <Hotlist/>
            </div>
        )
    }
}