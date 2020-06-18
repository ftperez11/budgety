import React, { Component } from 'react'

class UserForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: "",
      age: 0,
      zip: 0,
      income: 0,
      annualSpending: 0,
      familySize: 0,
     }
     //change handler -
  }
  render() {
    const questions = ['Fullname','Age','Monthly Income','Mortgage/Rent','Grocery Bill','Household Utilities','Monthly Auto Expense']
    //const dropDowns = ['Fullname','Age','Annual Income','Annual Spend','Desired Retirement Age']
    return (
      <div>
        <br/>
        {questions.map((item) => (
          <div class="input-group mb-3">
          <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon1">{item}</span>
          </div>
          <input id={item} type="text" class="form-control"/>
          </div>
        ))}
        <div class="input-group mb-3">
        <div class="input-group-prepend">
          <label class="input-group-text" for="inputGroupSelect01">Education Expenses</label>
        </div>
        <select class="custom-select" id="inputGroupSelect01">
          <option selected>Do you have any eduction expenses?</option>
          <option value="1">Yes - paying for college</option>
          <option value="2">No - debt free</option>
        </select>
      </div>

      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <label class="input-group-text" for="inputGroupSelect01">Housing</label>
        </div>
        <select class="custom-select" id="inputGroupSelect01">
        <option selected>Do you rent or own your current home?</option>
          <option value="1">Rent - I am currently renting</option>
          <option value="2">Own - I own the home I live in</option>
        </select>
      </div>
      <button className="chart-button" class="btn btn-info btn-lg" onClick={() =>{this.props.report('report')}}>Run My Budget!</button>
      </div>
     );
  }
}

export default UserForm;