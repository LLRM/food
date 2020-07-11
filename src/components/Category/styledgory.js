import styled from 'styled-components';

export const ClassifyWrap=styled.div`
    height: 100%;
    display: flex;
    >div:first-child{
        padding-bottom:52px;
        bottom: 22px;
        width: .9rem;
        >ul{
            height: 100%;
            overflow-y: scroll;
            li{
                height: .5rem;
                text-align: center;
                line-height: .5rem;
                background: #f3f3f3;
                &.active{
                    background: #fff;
                    span{
                        display: inline-block;
                        height: 100%;
                        width: 100%;
                        border-bottom: 2px solid #ee742f;
                    }
                }
            }
        }
    }
    >div:last-child{
        flex: 1;
        background: #fff;
        padding: .2rem .1rem 52px;
        >ul{
            display: flex;
            flex-wrap: wrap;
            height: 100%;
            overflow-y: scroll; 
            align-content:flex-start;
            li{
                width: 33.33333%;
                // border:1px solid black;
                text-align: center;
                height: .5rem;
                line-height: .5rem;
                color: #666;
            }
        }
        
    }
`