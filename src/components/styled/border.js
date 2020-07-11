import styled from 'styled-components';
const border = ({Comp,width="1px", style="solid", color="#ccc", radius="10px"})=>{
    const BorderdComp=styled(Comp)`
    border-width: ${props=>props.width || "1px"};
    border-color: ${props=>props.color || "#ccc"};
    border-style: ${props=>props.style || "solid"};
    border-radius: ${props=>props.radius|| 0};
`
    return BorderdComp;
}
export default border;