/* eslint-disable linebreak-style */
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.contrastText};
    border-radius: ${({ theme }) => theme.borderRadius};
    border: 0;
    //box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.24);

    width: 100%;
    padding: 10px 16px;
    font-weight: 700;
    font-size: 16px;
    line-height: 1;
    text-transform: uppercase;
    outline: 0;
    transition: .3s;
    cursor: pointer;
    font-family: 'Londrina Solid', sans-serif;

    &:hover,
    &:focus {
        opacity: .5;
    }

    &:disabled {
        background-color: #979797;
        cursor: not-allowed;
    }
`;

Button.propTypes = {
  type: PropTypes.oneOf(['submit', 'type', 'button']).isRequired,
  children: PropTypes.node.isRequired,
};

export default Button;