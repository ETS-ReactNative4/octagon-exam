import React from 'react'
import ScoreBoard from "./ScoreBoard";
import {connect} from "react-redux";
import * as Configuration from "../utils/Configuration";

const ExamResult = ({questions, dispatch}) => {
        let serverUrl = Configuration.serverUrl();
        return (
            <div>
                <div>
                    Thank you for answering questions.
                    <p><a className="btn btn-primary" href={serverUrl + "/student/dashboard"}>Go to Home Page</a></p>
                </div>
                <ScoreBoard questions={questions} />
            </div>
        )

};

const mapStateToProps = state => ({
    questions: state.questions
});


const mapDispatchToProps = (dispatch) => ({
    dispatch
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ExamResult)

