import styled from 'styled-components';

export const HeaderWrap=styled.div `
    height: .44rem;
    width:100%;
    background: #ee742f;
    font-size: .18rem;
    color: #fff;
    text-align: center;
    line-height: .44rem;
    position: absolute;
    top: 0;
    z-index: 1;
`

export const SwiperWrap=styled.div `
    margin-top:.44rem;
    height: 0;
    font-size: 0;
    padding-bottom:66.66667%;
    img{
        width: 100%;
    }
`

export const HotCateWrap=styled.div`
    
    header{
        color: #666;
        line-height: .5rem;
        background: #fff;
        padding-left: .2rem;
        border-bottom: 1px solid gray;
    }
    .item{
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: left;
    }
    img{
        width: 65%;
    }
    span{
        margin-top: .05rem;
    }
    
`

export const HotListWrap=styled.div`
    // padding: .2rem .1rem;
    header{
        color: #666;
        line-height: .5rem;
        padding-left: .2rem;
    }
    >div{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        figure{
            width: 45%;
            margin: 0;
            padding-bottom: 1em;
            // border:1px solid black;
            img{
                width: 100%;
            }
            &:nth-child(odd){
                // padding-right: .05rem;
                padding-right: 1.6667%;
            }
            &:nth-child(even){
                // padding-left: .05rem;
                padding-left: 1.6667%;
            }
            
            figcaption{
                background: #fff;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                height: .8rem;
                h3{
                    font-size: .16rem;
                    width:100%；

                }
                div{
                    margin-top: .05rem;
                    display: flex;
                    font-size: .12rem;
                    color: #666;
                }
            }
        }
    }
`