import React, { } from 'react';
import styled from 'styled-components';

import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md';
import { device } from '../../StyledTheme';

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
    margin-top: 5vh;
`;

const PaginationBut = styled.button<PaginationButProps>`
    border: none;
    background: transparent;
    &:hover svg {
        color: ${props => props.active ? props.theme.color.highlightColor : props.theme.color.inactive};
    }
    & svg {
        color: ${props => props.active ? props.theme.color.mainColor : props.theme.color.inactive};
        font-size: ${props => props.theme.fontSize.h2};
    }
`;


const NumberBox = styled.div`
    font-size: ${props => props.theme.fontSize.highText};
    color: ${props => props.theme.color.mainColor};
`;


export function CoolPagination({ page, setPage, totalPages, isLoading }:
    { page: number, setPage: React.Dispatch<React.SetStateAction<number>>, totalPages: number, isLoading: boolean }) {

    return (
        <MainBox>
            <PaginationBut active={!isLoading && page > 0} onClick={page > 0 ? () => setPage((old) => old - 1) : undefined}><MdNavigateBefore /></PaginationBut>
            <NumberBox>{page + 1}</NumberBox>
            <PaginationBut active={!isLoading && page < (totalPages - 1)} onClick={page < (totalPages - 1) ? () => setPage((old) => old + 1) : undefined}><MdNavigateNext /></PaginationBut>
        </MainBox>
    )
}