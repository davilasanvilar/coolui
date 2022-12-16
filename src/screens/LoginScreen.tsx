import React, { FC, ReactNode, useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ClipLoader, DotLoader } from 'react-spinners';
import styled, { useTheme } from 'styled-components';
import { ButtonBase } from '../components/atom/ButtonBase';
import { TextField } from '../components/atom/TextField';
import { useApi } from '../hooks/useApi';
import { useAuth } from '../hooks/useAuth';
import { StyledTheme } from '../StyledTheme';
import loginImg from './../../public/loginImg.png';
import { FaSignInAlt } from 'react-icons/fa'

const MainBox = styled.div`
    display: flex;
    position:absolute;
    top: 0;
    background: ${props => props.theme.color.mainColor};
    box-sizing: border-box;
    z-index: 80;
    padding: 1% 2%;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    transition: opacity 1s;
    &.hidden {
        transition: opacity 1s;
        opacity:0%;
    }
`;

const LoginBox = styled.div`
    display: flex;
    gap: 1vh;
    box-sizing: border-box;
    padding: 1% 2%;
    width: 30%;
    height: 70vh;
    max-height: 600px;
    flex-direction: column;
    align-items: center;
    & img {
        width: 150px;
        height: 150px;     
        margin-bottom: 5%;   
    }
`;

const LoginStyledInput = styled(TextField)`
    min-width: 200px;
    width:80%;
    font-size: ${props => props.theme.fontSize.regularText};
    padding: 10px; 
    margin-bottom: 5%; 
`;

const LoginButton = styled(ButtonBase)`
    font-size: ${props => props.theme.fontSize.buttonLabel};
    padding: 15px;
    width: 50%;
    background: ${props => props.theme.color.button};
    max-width: 200px;
    margin-top: 2%;
    color: ${props => props.theme.color.lightFont};
    border: none;
    transition: background .2s;
    display: flex;
    align-items: center;
    justify-content: space-around;
    & span {
        color: ${props => props.theme.color.lightFont};
    }
    &:hover {
        transition: background .2s;
        background: ${props => props.theme.color.buttonHover};
    }
    
`;


export function LoginScreen() {

    const { login, logout, fakeDelay } = useApi()
    const authInfo = useAuth()
    const navigate = useNavigate()
    const theme = useTheme()

    const renderNum = useRef<number>(0)

    const [mail, setMail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [showScreen, setShowScreen] = useState<boolean>(false)
    const [isHidden, setIsHidden] = useState<boolean>(false)


    useEffect(() => {
        if (renderNum.current === 0) {
            if (authInfo.isAuth) {
                setShowScreen(false)
            } else {
                setShowScreen(true)
            }
            renderNum.current = ++renderNum.current
        } else {
            if (isHidden) {
                setTimeout(() => {
                    setShowScreen(false)
                }, 2000);
            }
        }
    }, [isHidden])


    const onLogin = async () => {
        if (mail !== '' && password !== '') {
            setIsLoading(true)
            try {
                await authInfo.login(mail, password)

                setIsHidden(true)
                navigate('/')
            } catch (e) {
                setIsLoading(false)
            }
            setIsLoading(false)
        }
    }

    return (
        showScreen ?
            <MainBox className={isHidden ? 'hidden' : ''}>
                <LoginBox>
                    <img src={loginImg} alt='Logo login' />
                    <LoginStyledInput id='mail' value={mail} setValue={setMail} placeholder='Email'></LoginStyledInput>
                    <LoginStyledInput id='password' value={password} setValue={setPassword} placeholder='Contraseña' type='password'></LoginStyledInput>
                    <LoginButton clickFun={onLogin}><>{isLoading ? <ClipLoader color={theme.color.lightFont} size={20} /> : <FaSignInAlt color={theme.color.lightFont} size={20} />}{'Entrar'}</></LoginButton>
                </LoginBox>
            </MainBox>
            : <></>
    )
}