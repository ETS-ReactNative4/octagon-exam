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


const App = ({match: { params }, history, questions, settings, onSkipQuestionClicked, dispatch}) => {
    if(questions.length == 0){
        return(
            <div className="row">
                <div className="col-md-8 col-sm-12">
                    No questions found.
                    <p><a className="btn btn-primary" href={process.env.REACT_APP_JAVA_APP_URL + "/student/dashboard"}>Go to Home Page</a></p>
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
                    <AnswerOptions question={questions[getIndex(params)]} dispatch={dispatch} history={history} index={getIndex(params)} totalQuestion={questions.length} settings={settings}/>
                    <SubmitActions onSkipQuestionClicked={() => {
                        dispatch(onSkipQuestionClicked(questions[getIndex(params)].id));
                        Utils.redirectToNextQuestion(history, getIndex(params), questions.length);
                    }} settings={settings}/>
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
    settings: PropTypes.object.isRequired,
    onSkipQuestionClicked: PropTypes.func.isRequired,
    dispatch: PropTypes.func.isRequired
};



const mapStateToProps = state => ({
    settings: state.settings,
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


