import React, { useState } from 'react';
import styled from 'styled-components';
import { device } from '../../StyledTheme';
import { CoolIconButton } from '../atom/CoolIconButon';
import { IconTypeEnum, SizeEnum } from '../../types/types';

interface PaginationButProps {
    active?: boolean
}

const MainBox = styled.div`
    display: flex;
    padding: 0 25%;
    @media ${device.desktopL} { 
        padding: 0 35%;
        }
    width: 100%;
    box-sizing: border-box;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 5vh;
`;

const NumberBox = styled.div`
    font-size: ${props => props.theme.fontSize.h2};
    color: ${props => props.theme.color.mainColor};
`;


export function CoolPagination({ page, setPage, totalPages, isLoading }:
    { page: number, setPage: React.Dispatch<React.SetStateAction<number>>, totalPages: number, isLoading: boolean }) {

    return (
        <MainBox>
            <CoolIconButton type={IconTypeEnum.PREVIOUS} size={SizeEnum.XS} isDark isActive={!isLoading && page > 0} clickFun={page > 0 ? (e) => {
                e.currentTarget.disabled = true;
                ; setPage((old) => old - 1);
            } : undefined} />
            <NumberBox>{page + 1}</NumberBox>
            <CoolIconButton type={IconTypeEnum.NEXT} size={SizeEnum.XS} isDark isActive={!isLoading && page < (totalPages - 1)} clickFun={page < (totalPages - 1) ? () => setPage((old) => old + 1) : undefined} />
        </MainBox>
    )
}