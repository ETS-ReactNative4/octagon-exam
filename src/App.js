import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types'
import QuestionPic from './components/QuestionPic'
import AnswerOptions from "./components/AnswerOptions";
import ScoreBoard from "./components/ScoreBoard";
import SubmitActions from "./components/SubmitActions";
import {connect} from 'react-redux';
import * as QuestionActions from './actions/QuestionActions'
import * as Utils from "./utils/Utils";


const App = ({match: { params }, history, questions, onSkipQuestionClicked, dispatch}) => (
    <div className="App">
        <QuestionPic picUrl={questions[getIndex(params)].picUrl} />
        <AnswerOptions question={questions[getIndex(params)]} dispatch={dispatch} history={history} index={getIndex(params)} totalQuestion={questions.length}/>
        <SubmitActions onSkipQuestionClicked={() => {
            dispatch(onSkipQuestionClicked(questions[getIndex(params)].id));
            Utils.redirectToNextQuestion(history, getIndex(params), questions.length);
        }}/>
        <ScoreBoard questions={questions} />
    </div>
);

function getIndex(params){
    return parseInt(params.index) || 0;
}

App.propTypes = {
    questions: PropTypes.array.isRequired,
    onSkipQuestionClicked: PropTypes.func.isRequired,
    dispatch: PropTypes.func.isRequired
};



const mapStateToProps = state => ({
    questions: state.questions
});


const mapDispatchToProps = (dispatch) => ({
    onSkipQuestionClicked: QuestionActions.skipQuestion,
    dispatch
});


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)


