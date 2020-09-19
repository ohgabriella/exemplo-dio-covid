import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Grid, Skeleton } from '../../../components';
import Card from './Card';

function Board({ data }) {
    const { cases, confirmed, deaths, recovered } = data;

    const getValue = (value) => value ? value : <Skeleton variant="text" width={182} height={60} />
    
    return (
        <Grid container spacing={4}>
            <Grid item xs={12} md={3}>
                <Card value={getValue(cases)} label="Total de casos" color="#5d78ff" />
            </Grid>
            <Grid item xs={12} md={3}>
                <Card value={getValue(confirmed)} label="Casos confirmados" color="#5d78ff" />
            </Grid>
            <Grid item xs={12} md={3}>
                <Card value={getValue(deaths)} label="Total de mortes" color="#5d78ff" />
            </Grid>
            <Grid item xs={12} md={3}>
                <Card value={getValue(recovered)} label="Recuperados" color="#5d78ff" />
            </Grid>
        </Grid>
    )

}

export default Board;