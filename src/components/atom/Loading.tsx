import { ClipLoader } from 'react-spinners';
import { useTheme } from 'styled-components';
import { useMisc } from '../../hooks/useMisc';

export function Loading() {

    const { isLoading } = useMisc()
    const theme = useTheme()

    return (
        isLoading ?
            <div id='loading'>
                <ClipLoader color={theme.color.main.n}
                    loading={isLoading} size={150} />
            </div>
            :
            <></>
    )
}