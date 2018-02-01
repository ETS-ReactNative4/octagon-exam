import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types'
import QuestionPic from './components/QuestionPic'
import AnswerOptions from "./components/AnswerOptions";
import SubmitActions from "./components/SubmitActions";
import {connect} from 'react-redux';
import * as QuestionActions from './actions/QuestionActions'




const App = ({match: { params }, questions, onSkipQuestionClicked, dispatch}) => (
    <div className="App">
        <QuestionPic picUrl={questions[0].picUrl}  />
        <AnswerOptions />
        <SubmitActions onSkipQuestionClicked={() => {
            dispatch(onSkipQuestionClicked(questions[params.index || 0].id))
        }}/>
    </div>
);

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


