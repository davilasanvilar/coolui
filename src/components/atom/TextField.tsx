import React from 'react';
import styled from 'styled-components';


const TextInput = styled.input`
    outline:none;
`;

export function TextField({ id, value, setValue, type = 'text', placeholder, className }:
    { id: string, value: string, setValue: React.Dispatch<React.SetStateAction<string>>, type?: string, placeholder?: string, className?: string }) {

    return (
        <TextInput className={className} type={type} onChange={((e) => setValue(e.target.value))} value={value} placeholder={placeholder ? placeholder : undefined} />
    )
}