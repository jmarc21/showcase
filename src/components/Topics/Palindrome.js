import React, { Component } from 'react';

class Palindrome extends Component {

    constructor() {
        super();

        this.state = {
            userInput: '',
            palindrome: ''
        }
    }

    updateUserInput(val) {
        this.setState({ userInput: val })
    }

    updatePalin(userInput){
        var forwards = userInput;
        var backwards = userInput;
        backwards = backwards.split('');
        backwards = backwards.reverse();
        backwards = backwards.join('');

        if ( forwards === backwards){
            this.setState({ palindrome: 'true'});
        }else{
            this.setState({palindrome: 'false'});
        }
    }

    render() {
        return (
            <div className='puzzleBox filterStringPB'>
                <h4> Palindrome </h4>
                <input className='inputLine' onChange={(e) => this.updateUserInput(e.target.value)}></input>
                <button className='confirmationButton' onClick = {()=> this.updatePalin(this.state.userInput)}>Check</button>
                <span className='resultsBox'> Palindrome: {this.state.palindrome}</span>
            </div>
        )
    }
}

export default Palindrome;