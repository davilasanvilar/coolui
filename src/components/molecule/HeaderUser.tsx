import React from 'react';
import styled from 'styled-components';
import { ButtonBase } from '../atom/ButtonBase';
import { RiLogoutCircleRLine } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { useApi } from '../../hooks/useApi';
import { FaUserCircle } from 'react-icons/fa';


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
    color: ${props => props.theme.color.lightFont}  
`;

const UserIcon = styled.div`
    color: ${props => props.theme.color.lightFont};
    border-radius: 60px;
    width: 30px;
    height: 30px;
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
        color: #E1A600;


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
                    <FaUserCircle/>
                </UserIcon>
                {authInfo.id}
            </UserInfo>

            <LogoutButton clickFun={onLogout}><RiLogoutCircleRLine /></LogoutButton>
        </MainBox>
    )
}