import React, { Component } from 'react';

class FilterObject extends Component {

    constructor() {
        super();

        this.state = {
            employees: [
                {
                    name: 'John',
                    title: 'Hack0r',
                    age: 21
                },
                {
                    name: 'Justin',
                    age: 100,
                    hair: 'brown'
                },
                {
                    name: 'Tom',
                    food: 'pizza'
                }

            ],
            userInput: '',
            filteredArray: []
        }
    }
    updateUserInput(val){
        this.setState({userInput: val})
    }
    filterEmployees(prop){
        var employees = this.state.employees;
        var filteredEmployees = [];

        for(var i=0;i<employees.length;i++){
            if(employees[i].hasOwnProperty(prop)){
                filteredEmployees.push(employees[i]);
            }
        }
        this.setState({filteredEmployees: filteredEmployees})
    }



    render() {
        return (
            <div className="puzzleBox filterObjectPB">
                <h4> Fillter Object </h4>
                <span className="puzzleText">Original: {JSON.stringify(this.state.employees,null,10)}</span>
                <input className='inputLine' onChange={(e)=>this.updateUserInput(e.target.value) }></input>
                <button className='confirmationButton' onClick={()=> this.filterEmployees(this.state.userInput)}>Filter</button>
                <span className='resultsBox filterObjectRb'>Filtered: {JSON.stringify(this.state.filteredEmployees,null,10)}</span>
            </div>

        )
    }
}

export default FilterObject;
