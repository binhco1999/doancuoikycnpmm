import React from 'react';
import ReactDOM from 'react-dom';

import './calculate.css'



class Calculate extends React.Component{
    constructor(props){
      super(props)
      this.state = {
        pay: 0,
        basicsalary:0,
        workingDay:0,
        late:0,
        ot:0,
        tax:0,
        bonus:0,
        minus:0,
        hourlyPay: 0,
        weeklyPay: 0,
        biWeeklyPay: 0,
        monthlyPay: 0,
        yearlyPay: 0,
        rent:0,
        car:0
      }
      
      this.changeHourly = this.changeHourly.bind(this)
      this.changeWeekly = this.changeWeekly.bind(this)
      this.changeBiWeekly = this.changeBiWeekly.bind(this)
      this.changeMonthly = this.changeMonthly.bind(this)
      this.changeYearly = this.changeYearly.bind(this)
    }
    changeBasicSalary(event){
      this.setState({
        

      })
    }
    changeHourly(event){
      this.setState({
        hourlyPay: event.target.value,
        weeklyPay: event.target.value*40,
        biWeeklyPay: event.target.value*80,
        monthlyPay: event.target.value*160,
        yearlyPay: event.target.value*2080,
        rent: Math.round(100*event.target.value*160/3)/100,
        car: Math.round(100*event.target.value*16)/100
      })
    }
    changeWeekly(event){
      this.setState({
        hourlyPay: event.target.value/40,
        weeklyPay: event.target.value,
        biWeeklyPay: event.target.value*2,
        monthlyPay: event.target.value*4,
        yearlyPay: event.target.value*52,
        rent: event.target.value*4/3
        
      })
    }
    changeBiWeekly(event){
      this.setState({
        hourlyPay: event.target.value/80,
        weeklyPay: event.target.value/2,
        biWeeklyPay: event.target.value,
        monthlyPay: event.target.value*2,
        yearlyPay: event.target.value*26,
        rent: event.target.value*2/3
      })
    }
    changeMonthly(event){
      this.setState({
        hourlyPay: Math.round(100*event.target.value/160)/100,
        weeklyPay: Math.round(100*event.target.value/4)/100,
        biWeeklyPay: Math.round(100*event.target.value/2)/100,
        monthlyPay: event.target.value,
        yearlyPay: Math.round(100*event.target.value*12)/100,
        rent: Math.round(100*event.target.value/3)/100
      })
    }
    changeYearly(event){
      this.setState({
        hourlyPay: Math.round(100*event.target.value/2080)/100,
        weeklyPay: Math.round(100*event.target.value/52)/100,
        biWeeklyPay: Math.round(100*event.target.value/24)/100,
        monthlyPay: Math.round(100*event.target.value/12)/100,
        yearlyPay: Math.round(100*event.target.value)/100,
        rent: Math.round(100*event.target.value/36)/100,
        car: Math.round(100*event.target.value/108)/100
      })
    }
    render(){
      return (
        <div className = 'container-fluid'>
          <div className = 'header'>
            <h1>Salary Calculator</h1><h4>(before taxes)</h4>
          </div>
          <div className = 'information'>
            <div className = 'row'>
              <h3>Please fill in any of the boxes below</h3>
            </div>
            <div className = 'row col-xs-12'>
              <div className = 'col-xs-12 col-xs-4'>
                <h3>Hourly Pay</h3>
              </div>
              <div className = 'col-xs-12 col-xs-4'>
                <h3>$ {this.state.hourlyPay}</h3>
              </div>
              <div className = 'col-xs-12 col-xs-4'>
                <input onChange = {this.changeHourly}></input>
              </div>
            </div>
            <div className = 'row'>
              <h3>Weekly Pay</h3><h3>$ {this.state.weeklyPay}</h3><input onChange = {this.changeWeekly}></input>
            </div>
            <div className = 'row'>
              <h3>Bi-Weekly Pay</h3><h3>$ {this.state.biWeeklyPay}</h3><input onChange = {this.changeBiWeekly}></input>
            </div>
            <div className = 'row'>
              <h3>Monthly Pay</h3><h3>$ {this.state.monthlyPay}</h3><input onChange = {this.changeMonthly}></input>
            </div>
            <div className = 'row'>
              <h3>Yearly Pay</h3><h3>$ {this.state.yearlyPay}</h3><input onChange = {this.changeYearly}></input>
            </div>
            <div className = 'row'>
              <h3> </h3>
            </div>
            <div className = 'row'>
              <h2>Monthly Expenses</h2>
            </div>
            <div className = 'row'>
              <h3>Suggested Rent 30%</h3><h3>$ {this.state.rent}</h3>
            </div>
            <div className = 'row'>
              <h3>Suggested Auto Payments 10%</h3><h3>$ {this.state.car}</h3>
            </div>
            <div className = 'row'>
              <h3>Suggested Savings 10%</h3><h3>$ {this.state.car}</h3>
            </div>
          </div>
          
          <p id ="author">created by <a href = "">Andy Kim</a></p>
        </div>
      )
    }
  }
  export default Calculate;