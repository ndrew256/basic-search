import styled from 'styled-components'

const StyledInput = styled.input.attrs(props => ({
  type: "text",
  size: props.size || "1em",
}))`
  color: palevioletred;
  font-size: 14px;
  border: 2px solid palevioletred;
  border-radius: 8px;
  margin: ${props => props.size};
  padding: ${props => props.size};

  &:focus {
    outline: none;
  }
`;

const Input = (props) => {
  return <StyledInput {...props}/>
};

export default Input;