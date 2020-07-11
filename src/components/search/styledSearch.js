import styled from 'styled-components';
import border from '../styled/border';
export const SearchWrap=border({
    Comp: styled.div`
    padding: .1rem .15rem;
    div{
        border-radius: 5px;
        border: 1px solid rgb(207, 115, 9);
        display: flex;
        justify-content: center;
        align-items:center;
        height: .4rem;
        color: #666;
        background: #fff;
        img{
            width: .22rem;
            height: .22rem;
            margin-right: .05rem;
        }
    }
    `
})

// export const BorderSearchWrap=styled(SearchWrap)`
//     border-width: ${props=>props.border.width};
//     border-color: ${props=>props.border.color};
//     border-style: ${props=>props.border.style};
// `