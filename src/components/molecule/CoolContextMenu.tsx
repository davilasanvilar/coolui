import { useRef } from 'react';
import styled from 'styled-components';
import { useClickOutside } from '../../hooks/useClickOutside';
import { useMisc } from '../../hooks/useMisc';
import { ContextOption, CoolContextOption } from '../atom/CoolContextOption';


export interface ContextMenuPosition {
    top: number;
    left: number;
    visible: boolean;
}

const MainBox = styled.div<ContextMenuPosition>`
    display: flex;
    cursor: default;
    flex-direction: column;
    border-radius: 12px;
    border: ${props => `1px solid ${props.theme.color.main.l3}`};
    position: absolute;
    width: 125px;
    background: ${props => props.theme.color.background.n};
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    box-sizing: border-box;
    top: ${props => `${props.top}px`};
    left: ${props => `${props.left}px`};
    z-index: 10;
`;



export function CoolContextMenu({ visible, top, left, options, selectedElements }: { visible: boolean, top: number, left: number, options: ContextOption[], selectedElements: string[] }) {
    const wrapperRef = useRef<HTMLDivElement | null>(null);

    const { setClearContext } = useMisc()

    useClickOutside(wrapperRef, () => setClearContext((old) => !old));

    return (
        visible ?
            <MainBox ref={wrapperRef} top={top} left={left} visible={visible}>
                {options.map((option) =>
                    <CoolContextOption key={option.type} type={option.type} disabled={selectedElements.length > 1 && !(option.multi)} 
                        onClick={() => option.onClick(selectedElements)} label={option.label}></CoolContextOption>
                )}
            </MainBox >
            : <></>

    )
}