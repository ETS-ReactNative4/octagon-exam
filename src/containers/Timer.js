import { connect } from 'react-redux'
import React from "react";
import PropTypes from "prop-types";
import * as TimerActions from "../actions/TimerActions";


const Timer = ({dispatch, start = false, counter = 0, show = true}) => {
    if(start){
        startTimer(dispatch);
        dispatch(TimerActions.setStartToFalse());
    }
    return (
        <ShowTimer show={show} counter = {counter}/>
    );
};

function ShowTimer(props){
    const {show, counter} = props;
    if(show === undefined || show){
        return <div><strong>Per Question Time:</strong> {counter}</div>
    }
    return <div />
}

const mapStateToProps = (state) => ({
    start: state.questionDuration.start,
    counter: state.questionDuration.counter,
    show: state.questionDuration.show
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
    show: PropTypes.bool,
    dispatch: PropTypes.func.isRequired
};


export default connect(mapStateToProps, mapDispatchToProps)(Timer);