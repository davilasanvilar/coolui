import styled from 'styled-components';
import { SelectOption } from '../../types/types';


const InputStyled = styled.input.attrs({ type: 'checkbox' })`
`;

export function CheckboxBase({ value, setValue, className }: {
    className?: string, value: boolean, setValue: React.Dispatch<React.SetStateAction<boolean>>
}) {

    return (
        <InputStyled type={'checkbox'} className={className} checked={value} onChange={(e) => setValue(e.target.checked)} />
    )
}