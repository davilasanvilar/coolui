import React, { MouseEventHandler } from 'react';
import styled from 'styled-components';
import { ButtonTypeEnum, SelectOption } from '../../types/types';

const ButtonStyled = styled.button`
`;

export function SelectBase({ options, value, setValue, className }: {
    className?: string, options: SelectOption[], value: string, setValue: (value: string) => void
}) {

    return (
        <select className={className} value={value} onChange={(e) => setValue(e.target.value)}>
            <option key={'undefined_key'} value={''}>{'Seleccione una opción'}</option>
            {options.map((option) =>
                <option key={option.value} value={option.value}>{option.label}</option>)
            }
        </select>
    )
}