import React, { Component } from "react";
import { CSVReader } from "react-papaparse";

class CSVReader2 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleOnDrop = (data) => {
    let structuredData = ParseInfo(data);
    this.props.handleParsedData(structuredData);
  };

  handleOnError = (err, file, inputElem, reason) => {
    console.log(err);
  };

  handleOnRemoveFile = (data) => {
    //TODO: remove data from state or db
    console.log('---------------------------')
    console.log('remove data')
    console.log('---------------------------')
  };

  render() {
    return (
      <>
        <h5>Click and Drag Upload</h5>
        <CSVReader
          onDrop={this.handleOnDrop}
          onError={this.handleOnError}
          addRemoveButton
          onRemoveFile={this.handleOnRemoveFile}
        >
          <span>Drop CSV file here or click to upload.</span>
        </CSVReader>
      </>
    );
  }
}
export default CSVReader2;
//"Date", "Description", "Amount", "Transaction Type", "Category", "Account Name"
const ParseInfo = (csv) => {
  const parsedData = {
    stats: {
      totalIncome: 0,
      totalSpent: 0,
      totalTaxes: 0,
      timeperiod: 0,
      essentialCosts: 0,
      nonessentialCosts: 0,
      savings: 0,
    },
    categories: {},
    accounts: {},
  };
  csv.forEach((item, index) => {
    if (index !== 0) {
      let transaction = item.data; // transaction data
      let previousDateData = csv[index - 1].data[0]; //to compare uniqueness
      let dateData = transaction[0]; // date of transaction
      let accountData = transaction[5]; // account name
      let typeData = transaction[3]; //debit or credit
      let amountData = Number(transaction[2]); // amount spent
      let categoryData = transaction[4]; // category name
      //update categories
      if (!parsedData.categories[categoryData]) {
        parsedData.categories[categoryData] = {
          amount: amountData,
          frequency: 1,
        };
      } else {
        parsedData.categories[categoryData].amount += amountData;
        parsedData.categories[categoryData].frequency += 1;
      }
      // update accounts
      if (!parsedData.accounts[accountData]) {
        parsedData.accounts[accountData] = {
          type: typeData,
          amount: amountData,
          frequency: 1,
        };
      } else {
        parsedData.accounts[accountData].amount += amountData;
        parsedData.accounts[accountData].frequency += 1;
      }
      // essential cost categories keywords:
      const essentialCostKeyWords = [
        "Groceries",
        "Rent",
        "Mortgage",
        "Transportation",
        "Car",
      ];
      if (previousDateData !== dateData) {
        parsedData.stats.timeperiod += 1;
      }
      // will loop AT MAX 5 times search for essentials
      for (var word = 0; word < essentialCostKeyWords.length; word++) {
        let key = essentialCostKeyWords[word];
        if (categoryData.includes(key)) {
          parsedData.stats.essentialCosts += amountData;
          parsedData.stats.totalSpent += amountData;
          break;
        } else if (categoryData.includes("Tax")) {
          parsedData.stats.totalTaxes += amountData;
          parsedData.stats.totalSpent += amountData;
          break;
        } else if (categoryData === "Paycheck") {
          parsedData.stats.totalIncome += amountData;
          break;
        } else if (word === essentialCostKeyWords.length - 1) {
          parsedData.stats.totalSpent += amountData;
          parsedData.stats.nonessentialCosts += amountData;
        }
      }
    }
  });
  parsedData.stats.savings =
    parsedData.stats.totalIncome - parsedData.stats.totalSpent;
  return parsedData;
};
// const exampledata = {
//   stats: {
//     totalIncome: 1626.06,
//     totalSpent: 2640.7000000000003,
//     totalTaxes: 32.55,
//     timeperiod: 12,
//     essentialCosts: 1639.28,
//     nonessentialCosts: 968.87,
//     savings: -1014.6400000000003,
//   },
//   categories: {
//     Gym: { amount: 49, frequency: 1 },
//     Restaurants: { amount: 307.84000000000003, frequency: 9 },
//     Shopping: { amount: 10.12, frequency: 1 },
//     "Mortgage & Rent": { amount: 1150, frequency: 1 },
//     "Coffee Shops": { amount: 11.75, frequency: 3 },
//     "Food & Dining": { amount: 9.42, frequency: 1 },
//     "Public Transportation": { amount: 335.5, frequency: 3 },
//     Groceries: { amount: 153.77999999999997, frequency: 8 },
//     "Rental Car & Taxi": { amount: 32.55, frequency: 1 },
//     "ATM Fee": { amount: 2.5, frequency: 1 },
//     "Cash & ATM": { amount: 80, frequency: 1 },
//     "Fast Food": { amount: 24.77, frequency: 2 },
//     Furnishings: { amount: 25.51, frequency: 1 },
//     Vacation: { amount: 200, frequency: 1 },
//     "Air Travel": { amount: 247.96, frequency: 1 },
//     Paycheck: { amount: 1626.06, frequency: 1 },
//     "": { amount: 0, frequency: 539 },
//   },
//   accounts: {
//     "Credit Card 1": {
//       type: "debit",
//       amount: 1192.3100000000002,
//       frequency: 29,
//     },
//     "Banking Account": { type: "debit", amount: 3058.56, frequency: 5 },
//     "Credit Card 2": { type: "debit", amount: 15.89, frequency: 2 },
//     "": { type: "", amount: 0, frequency: 539 },
//   },
// };