import styled from "styled-components"

const Button = (props) => {
    const StyledButton = styled.button`
        background-color: #FF6D33;
        color: white;
        border: none;
        cursor: pointer;
        outline: none;
    `
    return (
        <StyledButton>{props.buttonText}</StyledButton>
    )
}
export default Button