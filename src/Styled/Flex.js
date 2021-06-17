import styled from 'styled-components'

const StyledFlex = styled.div`
display:flex;
max-width:${props => props.margin || '500px'};
padding:0 15px;
margin:${props => props.margin || '0 auto'};
justify-content:${props => props.margin || 'center'};
`

const Flex = (props) => {
  return <StyledFlex {...props} />
};

export default Flex;
