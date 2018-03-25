import { connect } from 'react-redux'
import React from "react";
import PropTypes from "prop-types";
import * as TimerActions from "../actions/TimerActions";


const Timer = ({dispatch, start = false, counter = 0}) => {
    if(start){
        startTimer(dispatch);
        dispatch(TimerActions.setStartToFalse());
    }
    return (
        <div><strong>Per Question Time:</strong> {counter}</div>
    );
};

const mapStateToProps = (state) => ({
    start: state.questionDuration.start,
    counter: state.questionDuration.counter,
});

function startTimer(dispatch){
    setInterval(
        function () {
            dispatch(TimerActions.incrementPerQuestionTimer());
        }, 1000);
}


const mapDispatchToProps = (dispatch) => ({
    dispatch
});


Timer.propTypes = {
    start: PropTypes.bool,
    counter: PropTypes.number,
    dispatch: PropTypes.func.isRequired
};


export default connect(mapStateToProps, mapDispatchToProps)(Timer);