import React from 'react';
import styled from 'styled-components';
import { ButtonBase } from '../bases/ButtonBase';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { CoolIconButton } from '../atom/CoolIconButon';
import { IconTypeEnum, SizeEnum } from '../../types/types';
import { CoolIcon } from '../atom/CoolIcon';


const MainBox = styled.div`
    margin-left: auto;
    display: flex;
    width: 30%;
    flex-direction: row;
    max-width: 360px;
`;

const UserInfo = styled.div`
    display: flex;
    align-items: center;
    width: 80%;
    gap: 5%;
    font-size: 1.3rem;
    color: ${props => props.theme.color.lightFont};
`;

const UserIcon = styled.div`
    color: ${props => props.theme.color.lightFont};
    border-radius: 60px;
    width: 25px;
    height: 25px;
    border: none;
    font-size: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
`;

const LogoutButton = styled(ButtonBase)`
    color: ${props => props.theme.color.mainColor};
    border-radius: 60px;
    width: 35px;
    height: 35px;
    border: none;
    font-size: 1.5rem;
    background-color: ${props => props.theme.color.bgColor};
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    margin-left: auto;
    border: 3px solid transparent;

    transition: border-color .2s, color .2s;

    &:hover {
    transition: border-color .2s, color .2s;
        border: 3px solid #E1A600;
        color: ${props => props.theme.color.highlightColor};
        border-color: ${props => props.theme.color.highlightColor};
    }`;
    
export function HeaderUser() {

    const navigate = useNavigate()
    const authInfo = useAuth()

    const onLogout = async () => {
        try {
            await authInfo.logout()
            navigate('/')
        } catch (e) {
        }
    }

    return (
        <MainBox>
            <UserInfo>
                <UserIcon>
                    <CoolIcon type={IconTypeEnum.USER} />
                </UserIcon>
                {authInfo.id}
            </UserInfo>
            <CoolIconButton type={IconTypeEnum.LOGOUT} clickFun={onLogout} size={SizeEnum.XS} />
        </MainBox>
    )
}