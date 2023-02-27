import React, { MouseEventHandler } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const ButtonStyled = styled.button`
overflow: hidden;
`;

export function ButtonBase({ onClick, className, children, disabled, tooltipId }: {
    onClick?: MouseEventHandler<HTMLButtonElement>, className?: string, children?: JSX.Element | JSX.Element[], disabled?: boolean, tooltipId?: string
}) {

    const { t } = useTranslation()
    const tooltip = t(`button.tooltip.${tooltipId}`)

    return (
        <ButtonStyled className={className} onClick={onClick} disabled={disabled} title={tooltipId ? tooltip : ''}> {children}</ButtonStyled >
    )
}