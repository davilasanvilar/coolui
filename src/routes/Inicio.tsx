import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState, useRecoilState } from 'recoil';
import { useApi } from '../hooks/useApi';
import { useAuth } from '../hooks/useAuth';
export function Inicio() {

    return (
        <div>
            <p>ESTO ES UNA PRUEBA PARA QUE VEAMOS COMO VA LA MOVIDA</p>
        </div>
    )
}
