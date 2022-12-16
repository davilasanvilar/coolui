import React, { MouseEventHandler } from 'react';
import styled from 'styled-components';
import { ButtonType } from '../../types/types';

const ButtonStyled = styled.button`
`;

export function ButtonBase({ clickFun, className, children, type }: {
    clickFun: MouseEventHandler<HTMLButtonElement>, className?: string, children?: JSX.Element | JSX.Element[], type?: ButtonType
}) {

    const getIcon = () => {
        switch (type) {
            case ButtonType.SAVE:
                return <></>
            case ButtonType.CANCEL:
                return <></>
            case ButtonType.DELETE:
                return <></>
            case ButtonType.EDIT:
                return <></>
            default:
                return <></>
        }
    }

    return (
        <button className={className} onClick={clickFun}>{children}</button>
    )
}