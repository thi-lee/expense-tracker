import React from 'react';
import { Card, CardHeader, CardContent, Typography } from '@material-ui/core';
import { Doughnut } from 'react-chartjs-2';
import {Chart, ArcElement} from 'chart.js';

import useStyles from './styles';
import useTransactions from '../../useTransactions';


Chart.register(ArcElement);
const Details = ({title, subheader}) => {
    
    const {total, chartData} = useTransactions(title);
    const classes = useStyles();

    return (
        <div>
            <Card className={title === 'Income' ? classes.income : classes.expense}>
                <CardHeader title={title} subheader={subheader} />
                <CardContent>
                    <Typography variant="h5">${total}</Typography>
                    <Doughnut data={chartData}></Doughnut>
                </CardContent>
            </Card>
        </div>
    )
}

export default Details;