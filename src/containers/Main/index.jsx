import React, { memo, useState, useCallback, useEffect } from 'react';
import Api from '../../services/api';
import Board from './components/Board';
import { ContainerStyled } from './style';

function Main() {
    const [data, setData] = useState({});
    const [country, setCountry]= useState('brazil');

    console.log(data);

    const getCovidData = useCallback((country) => {
        Api.get(country)
        .then(data => setData(data.data.data))
    }, [])

    useEffect(() => {
        getCovidData(country)
    }, [getCovidData, country])

    return(
        <ContainerStyled>
            <div className="mb-2">
            
            </div>
            <Board data={data} />
        </ContainerStyled>
    )
}

export default memo(Main);