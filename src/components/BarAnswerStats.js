import React from 'react'
import {HorizontalBar} from 'react-chartjs-2';


const BarAnswerStats = ({question}) => {
    if(question.answerStats === undefined || question.correctOption === undefined){
        return null;
    }

    const green = "#228B22";
    const grey = "#D3D3D3";

    let backgroundColor = [
        question.correctOption.indexOf("A") >=0 ? green : grey,
        question.correctOption.indexOf("B") >=0 ? green : grey,
        question.correctOption.indexOf("C") >=0 ? green : grey,
        question.correctOption.indexOf("D") >=0 ? green : grey
    ];


    const data = {
        labels: ['A', 'B', 'C', 'D'],
        datasets: [
            {
                label: 'Options as percentage',
                backgroundColor: backgroundColor,
                data: question.answerStats.options
            }
        ]
    };

    const options = {
            legend: {
                display: false,
            },
            scales: {
                xAxes: [{
                    gridLines: {
                        display: false
                    },
                    ticks: {
                        min: 0,
                        max: 100,
                        callback: function(value){return value+ "%"}
                    },
                }],
                yAxes: [{
                    gridLines: {
                        display: false
                    }
                }]
            }

    };

    return (
        <div className="card mb-3">
            <div className="card-header">
                Test Analysis
            </div>
            <div className="card-body">
                <HorizontalBar
                    data={data}
                    options={options}
                />
                <p className={"margin-top-25"}>Times Answered: {question.answerStats.timesAnswered}</p>
            </div>
        </div>
    )
};

export default BarAnswerStats;