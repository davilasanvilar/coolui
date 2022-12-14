import React, { ReactNode } from 'react';
import styled, { DefaultTheme } from 'styled-components';
import { SizeEnum } from '../../types/types';
import { ModalButton } from '../../types/types'
import { CoolButton } from '../atom/CoolButton';
import { CgCloseR } from 'react-icons/cg';


const MainBox = styled.div`
    width: 100%;
    position: absolute;
    top: 0;
    height: 100vh;
    background: ${props => props.theme.color.mainColorLowOp};
    backdrop-filter: blur(5px);
    display: flex;
    justify-content:center;

`;

interface ModalProps {
    size?: SizeEnum;
}

interface SizeInfo {
    width: number;  //UNIT: %
    height: number; //UNIT: vh
    maxHeight: number; //UNIT: px
}

const getSize = (size?: SizeEnum): SizeInfo => {
    switch (size) {
        case SizeEnum.L:
            return { width: 75, height: 60, maxHeight: 700 }
        case SizeEnum.M:
            return { width: 60, height: 45, maxHeight: 450 }
        case SizeEnum.S:
            return { width: 40, height: 35, maxHeight: 250 }
        case SizeEnum.XS:
            return { width: 40, height: 25, maxHeight: 215 }
        default:
            return { width: 60, height: 45, maxHeight: 215 }
    }
}


const InsideBox = styled.div<ModalProps>`
    width: ${props => `${getSize(props.size).height}%`};
    margin-top: 20vh;
    min-width: 320px;
    max-height: ${props => `${getSize(props.size).maxHeight}px`};
    height: ${props => `${getSize(props.size).height}vh`};
    display: flex;
    flex-direction: column;
    background: ${props => props.theme.color.lightBackground};
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;`;

const ModalHeader = styled.div<ModalProps>`
    width:100%;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 0 5%;
    background: ${props => props.theme.color.mainColor};
    & h1 {
        color: ${props => props.theme.color.lightFont};
        font-size: ${props => props.theme.fontSize.h1}
    }
    & button {
        color: ${props => props.theme.color.lightFont};
        font-size: ${props => props.theme.fontSize.h1};
        font-size: 2rem;
        background: none;
        border: none;
        padding: 0;
        transition: color .1s;
        display:flex;
        justify-content: center;
    }
    & button:hover {
        transition: color .1s;
        color: ${props => props.theme.color.secondColor};

    }
`;


const ModalBody = styled.div<ModalProps>`
    box-sizing: border-box;
    flex-grow: 1;
    overflow-y: auto;
    overflow-x: hidden;
`;
const ModalFooter = styled.div<ModalProps>`
    padding: 0 5%;
    box-sizing: border-box;
    display:flex;
    height: 70px;
    min-height: 70px;
    gap: 5%;
    justify-content: flex-end;
    align-items: center;
`;

{/*<><button onClick={onConfirm}><AiOutlineSend />{'Sí'}</button>
<button onClick={onClear}><AiOutlineSend />{'No'}</button></>*/
}


export function ModalBase({ children, title, size, onClose, buttons }: { children: ReactNode, onClose: () => void, title?: string, size?: SizeEnum, buttons?: ModalButton[] }) {

    return (
        <MainBox>

            <InsideBox size={size} >
                {title ?
                    <ModalHeader size={size} >
                        <h1>{title}</h1>
                        <button id='modalCloseBut' onClick={() => { onClose() }}><CgCloseR /></button>
                    </ModalHeader>
                    : undefined}
                {children ?
                    <ModalBody size={size}>
                        {children}
                    </ModalBody> : undefined
                }
                <ModalFooter size={size}>
                    {buttons?.map((button) =>
                        <CoolButton type={button.type} size={SizeEnum.XS} clickFun={button.onClick} />
                    )}
                </ModalFooter>

            </InsideBox>
        </MainBox >
    )
}