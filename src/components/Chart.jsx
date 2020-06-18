import React, { Component } from 'react'
import { Bar } from 'react-chartjs-2';

class Chart extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            data:{
                labels: ['Gym','Restaurants','Shopping','Groceries',"Furnishings","Vacation",'Pharmacy','Clothing','Amusement','Entertainment','Parking','Transfer','Internet','Taxes','Utilities','Music','Travel'],
                datasets:[{
                    label:["Monthly Spend"],
                    data:[392,4339,1017,2011,3084,578,597,933,155,822,30,545,279,1111,181,3,140],
                    backgroundColor:[
                        'rgba(255, 99, 132, 0.6)',
                        'rgba(54, 162, 235, 0.6)',
                        'rgba(255, 206, 86, 0.6)',
                        'rgba(75, 192, 192, 0.6)',
                        'rgba(153, 102, 255, 0.6)',
                        'rgba(72,61,139,0.6)',
                        'rgba(106,90,205,0.6)',
                        'rgba(123,104,238,0.6)',
                        'rgba(147,112,219,0.6)',
                        'rgba(148,0,211,0.6)',
                        'rgba(128,0,128,0.6)',
                        'rgba(255,20,147,0.6)',
                        'rgba(244,164,96,0.6)',
                        'rgba(188,143,143,0.6)',
                        'rgba(139,0,139,0.6)',
                        'rgba(147,112,219,0.6)',
                        'rgba(153,50,204,0.6)',
                      ]
                },
            ]
            }
         }
    }
    
    render() { 
        return ( 
            <Bar
            data={this.state.data}
            options={{
                title:{
                    display:true,
                    text:'July Budget Report',
                    fontSize:25
                },
                legend:{
                    display:false,
                    position:'right'
                }
            }}
            />
         );
    }
}
 
export default Chart;