import styled from 'styled-components'

const StyledButton = styled.button`
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  transition-duration: 0.4s;

  &:focus {
    outline: none;
  }

  &: hover {
    background: rebeccapurple;
    border: 2px solid rebeccapurple;
  }
`;

const Button = (props) => {
  return <StyledButton {...props}/>
};

export default Button;