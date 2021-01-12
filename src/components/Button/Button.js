import styled from 'styled-components';

const ButtonLink = styled.a`
    color:${props => props.color};
    background-color: ${props => props.backgroundColor};
    display:flex;
    justify-content:center;
    align-items:center;
    width:${props => props.width}px;
    height:50px;
    border-radius:${props => props.borderRadius}px;
    ${
        props => props.border && `border: 1px solid ${props.borderColor};`
    }
`

const Button = ({children, backgroundColor, width, color, border, borderColor, borderRadius}) => {
    return (
        <div>
            <ButtonLink 
                href="/"
                backgroundColor={backgroundColor}
                width={width}
                color={color}
                border={border}
                borderRadius={borderRadius}
                borderColor={borderColor}
            >
                {children}
            </ButtonLink>
        </div>
    );
}

export default Button;
