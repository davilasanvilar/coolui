import React, { MouseEventHandler } from 'react';
import styled from 'styled-components';

const ButtonStyled = styled.button`
overflow: hidden;
`;

export function ButtonBase({ onClick, className, children }: {
    onClick?: MouseEventHandler<HTMLButtonElement>, className?: string, children?: JSX.Element | JSX.Element[]
}) {

    return (
        <ButtonStyled className={className} onClick={onClick}>{children}</ButtonStyled>
    )
}