import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types'
import QuestionPic from './components/QuestionPic'
import AnswerOptions from "./components/AnswerOptions";
import ScoreBoard from "./components/ScoreBoard";
import SubmitActions from "./components/SubmitActions";
import LoginRedirectMonitor from "./containers/LoginRedirectMonitor";
import Timer from "./containers/Timer";
import {connect} from 'react-redux';
import * as QuestionActions from './actions/QuestionActions'
import * as Utils from "./utils/Utils";
import * as RestClient from './api/RestClient'
import * as Configuration from "./utils/Configuration";


const App = ({match: { params }, history, questions, onSkipQuestionClicked, dispatch}) => {
    let serverUrl = Configuration.serverUrl();
    if(questions.length == 0){
        return(
            <div className="row">
                <div className="col-md-8 col-sm-12">
                    Congrats!!! You have solved all questions from our question Bank.
                    <p><a className="btn btn-primary" href={serverUrl + "/student/dashboard"}>Go to Home Page</a></p>
                </div>
            </div>
        );
    } else{
        return(
            <div className="row">
                <div className="col-md-8 col-sm-12">
                    <LoginRedirectMonitor />
                    <Timer />
                    <QuestionPic picUrl={questions[getIndex(params)].picUrl} />
                    <AnswerOptions question={questions[getIndex(params)]} dispatch={dispatch} history={history} index={getIndex(params)} totalQuestion={questions.length}/>
                    <SubmitActions onSkipQuestionClicked={() => {
                        dispatch(onSkipQuestionClicked(questions[getIndex(params)].id));
                        Utils.redirectToNextQuestion(history, getIndex(params), questions.length);
                    }}/>
                </div>
                <div className="col-md-4 col-sm-12">
                    <ScoreBoard questions={questions} />
                </div>
            </div>
        );
    }
};

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


