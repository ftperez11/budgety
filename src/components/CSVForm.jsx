import React, { Component } from 'react';
import CSVReader2 from './CSVReader2';

class CSVForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      "Full-Name": "",
      "Age": 0,
      "Annual Income": 0,
      'Desired Retirement Age': 0,
      parsedIncomeData: {},
     }
     this.changeHandler = this.changeHandler.bind(this);
     this.handleParsedData = this.handleParsedData.bind(this);
  }

  handleParsedData (parsedData) {
    this.setState({
      parsedIncomeData: parsedData,
    });
    console.log(this.state);
  }

  changeHandler (e) {
    let field = e.target.id;
    let input = e.target.value;

    this.setState({
      [field]: input,
    });
  }

  render() {
    const questions = ['Full-Name','Age','Annual Income', 'Desired Retirement Age']
    return (
      <div>
        <div>
        <p>Answer the questions below, and upload a CSV file</p>
        </div>
        {questions.map((item) => (
          <div class="input-group mb-3">
          <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon1">{item}</span>
          </div>
          <input id={item} type="text" class="form-control" onChange={this.changeHandler}/>
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
      <CSVReader2 handleParsedData={this.handleParsedData}/>
      </div>
     );
  }
}

export default CSVForm;