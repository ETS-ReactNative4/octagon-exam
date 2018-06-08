import React, {Component} from 'react'
import {Pie} from 'react-chartjs-2';
import * as Utils from "../utils/Utils";


const PieChartTestAnalysis = ({questions}) => {
    const data = {
        labels: [
            'Correct',
            'Incorrect',
        ],
        datasets: [{
            data: [Utils.countAnswerCorrect(questions), Utils.countAnswerWrong(questions)],
            backgroundColor: [
                '#228B22',
                '#FF0000'
            ]
        }]
    };

    return (
        <div className="card mb-3">
            <div className="card-header">
                Test Analysis
            </div>
            <div className="card-body">
                <Pie
                    data={data}

                />
            </div>
        </div>
    )
};

export default PieChartTestAnalysis;