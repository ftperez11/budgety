import React, { Component } from "react";
import UserForm from "./components/UserForm";
import "./App.css";
import Chart from "./components/Chart";
import SamplePlan from "./components/SamplePlan";
import CSVForm from "./components/CSVForm";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      views: "",
    };
    this.switchViews = this.switchViews.bind(this);
  }

  switchViews(view) {
    this.setState({
      views: view,
    });
    console.log(this.state);
  }

  renderViews() {
    const view = this.state.views;

    if (view === "userform") {
      return <UserForm report={this.switchViews}/>;
    } else if (view === "csvfile") {
      return <CSVForm report={this.switchViews}/>;
    } else if (view === "report") {
      return (
        <div>
          <SamplePlan />
          <Chart />
        </div>
      );
    } else {
      return null;
    }
  }


  render() {
    return (
      <div className="App">
        <div class="jumbotron">
          <h1 class="display-4">Welcome to Budgety</h1>
          <p class="lead">
            You have come to the right place! Our job is to help you achieve
            your financial goals
          </p>
          <hr class="my-4" />
          <p>
            But first! In order for our team to provide the best advice, please
            click next to fill out the survey form.
          </p>
          <p class="lead" />
          <button
            class="btn btn-primary btn-lg"
            onClick={() => {
              this.switchViews("userform");
            }}
          >
            Start Planning!
          </button>
          <button
            style={{ margin: "auto" }}
            class="btn btn-secondary btn-lg"
            onClick={() => {
              this.switchViews("csvfile");
            }}
          >
            I have a CSV File
          </button>
          {this.renderViews()}
        </div>
      </div>
    );
  }
}

export default App;
