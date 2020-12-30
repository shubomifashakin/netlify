import React,{Component} from "react";
import "./css/styles.css";


class Application extends Component{

  constructor(props){
    super(props);

    this.state = {
        money: "",
        percentage:"",
        tip:"0"
    }

    this.moneyChange = this.moneyChange.bind(this);
  }

  calculate = () => {
    let {money, percentage, tip} = this.state;
    if(money !== "" && percentage !== ""){
        tip  = eval(String((money * percentage)/100));
        this.setState({tip, money:"", percentage:""})
    }
  }

  moneyChange = (e)=> {
    this.setState({money: e.target.value});  
  }

  mode(){
    var x = document.body;
     x.classList.toggle("darkmode");

     var y = document.getElementById("calc");
     y.classList.toggle("darkmode2")
 }

  percentageChange = (e) => {
    this.setState({percentage: e.target.value});
  }

  render(){
    return(
            <div id="container">

                  <button onClick={()=>this.mode()}>Mode</button>

                
                <div className="calc-container" id="calc">

                  <div className="inner-calc">
                    <h2>Tip Calculator</h2>

                    <div className="tip"><span className="tip-container">&#8358;{this.state.tip}</span></div> 

                  <div className="fieldGroup">
                    <label className="label">Amount Spent</label>
                        <div className="space"> &#8358; &nbsp;<input type="text" className="inputField money"value={this.state.money}  onChange={this.moneyChange} placeholder="Enter value" /></div>
                  </div>

                  <div className="fieldGroup">
                    <label className="label">Tip Percent</label>
                    <input className="percentage" type="range" step="10" min="10" max="50"   onChange={this.percentageChange}  ></input>&nbsp;<output id="num">{this.state.percentage}%</output>
                  </div>


                  <button type="submit" onClick={()=> this.calculate()} className="calculate">Calculate</button>

                  </div>
                  </div>
            </div>
    )
  }
}

export default Application;