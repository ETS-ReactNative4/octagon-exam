import React, {Component} from 'react'

export default class AnswerOptions extends Component {
    render(){
        return(
            <div>
                Input choices here
                <input type="checkbox" /> Option A
                <input type="checkbox" /> Option B
                <input type="checkbox" /> Option C
                <input type="checkbox" name="D"/> Option D
            </div>
        )
    }

}