import React, { memo, useState, useCallback, useEffect } from '../containers/components/react';
import Api from '../../services/api';
import { ContainerStyled } from './style';

function Main() {
    const [data, setData] = useState({});
    const [country, setCountry]= useState('brazil');

    const getCovidData = useCallback((country) => {
        Api.get(country)
        .then(data => setData(data))
    }, [])

    useEffect(() => {
        getCovidData(country)
    }, [getCovidData, country])

    return(
        <ContainerStyled>

        </ContainerStyled>
    )
}

export default memo(Main);