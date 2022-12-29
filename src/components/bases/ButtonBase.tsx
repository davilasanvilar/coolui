import React, { MouseEventHandler } from 'react';
import styled from 'styled-components';
import { ButtonTypeEnum } from '../../types/types';

const ButtonStyled = styled.button`
overflow: hidden;
`;

export function ButtonBase({ clickFun, className, children, type }: {
    clickFun?: MouseEventHandler<HTMLButtonElement>, className?: string, children?: JSX.Element | JSX.Element[], type?: ButtonTypeEnum
}) {

    const getIcon = () => {
        switch (type) {
            case ButtonTypeEnum.SAVE:
                return <></>
            case ButtonTypeEnum.CANCEL:
                return <></>
            case ButtonTypeEnum.DELETE:
                return <></>
            case ButtonTypeEnum.EDIT:
                return <></>
            default:
                return <></>
        }
    }

    return (
        <ButtonStyled className={className} onClick={clickFun}>{children}</ButtonStyled>
    )
}