import React from 'react'
import ScoreBoard from "./ScoreBoard";
import {connect} from "react-redux";

const ExamResult = ({questions, dispatch}) => {
        return (
            <div>
                <div>
                    Thank you for answering questions.
                    <p><a className="btn btn-primary" href="http://localhost:8793/subject">Go to Home Page</a></p>
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

