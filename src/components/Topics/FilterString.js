import React, { Component } from 'react';

class FilterString extends Component {
    constructor() {
        super();

        this.state = {
            unFilteredArray: ['hello', 'bob', 'john', 'love', 'hop'],
            userInput: '',
            filteredArray: []
        }
    }
    updateUserInfo(val) {
        this.setState({ userInput: val })
    }
    filterArray(userInput){
        var names = this.state.unFilteredArray;
        var filteredArray=[];

        for(var i=0;i< names.length;i++){
            if(names[i].includes(userInput)){
                filteredArray.push(names[i]);
            }
        }
        this.setState({filteredArray: filteredArray });
    }


    render() {
        return (
            <div className='puzzleBox filterStringPB'>
                <h4> Filter String </h4>
                <span className='puzzleText'>Unfiltered Array: {JSON.stringify(this.state.unFilteredArray,null,10)}</span>
                <input className='inputLine' onChange={(e) => this.updateUserInfo(e.target.value)}></input>
                <button className='cnfirmationButton' onClick={() => this.filterArray(this.state.userInput)}>Filter</button>
                <span className='resultsBox filterStringRB'>Filtered Array:{JSON.stringify(this.state.filteredArray,null,10)}</span>
            </div>
        )
    }
}

export default FilterString;