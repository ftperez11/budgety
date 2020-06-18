import React, { Component } from 'react'
import { Pie } from 'react-chartjs-2';

class SamplePlan extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            data:{
                labels: ['Monthly Income','Mortgage / Rent','Grocery','Household Utilities','Monthly Auto Expense'],
                datasets:[{
                    label:["Total Spent","Spending Goal"],
                    data:[3000,1500,200,100,400],
                    backgroundColor:[
                        'rgba(255, 99, 132, 0.6)',
                        'rgba(54, 162, 235, 0.6)',
                        'rgba(255, 206, 86, 0.6)',
                        'rgba(75, 192, 192, 0.6)',
                        'rgba(153, 102, 255, 0.6)',
                      ]
                },
            ]
            }
         }
    }
    
    render() { 
        return ( 
            <Pie
            data={this.state.data}
            options={{
                title:{
                    display:true,
                    text:'Sample Budget',
                    fontSize:25
                },
                legend:{
                    display:true,
                    position:'right'
                }
            }}
            />
         );
    }
}
 
export default SamplePlan;