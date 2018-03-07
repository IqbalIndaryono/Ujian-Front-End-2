import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  constructor(){
    super();
    this.state={name : '', Test : []}
  }
  Click(){
    this.setState({name: this.refs.name.value});
  }
  Clicky(){
    var x=this.state.name;
    axios.get('https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?t='+x).then((ambilData)=>{
      console.log(ambilData.data.player);
      this.setState({
        Test : ambilData.data.player,
      })
    })
  }
  render() {
    const data = this.state.Test.map((item,index)=>{
      var a = item.strPlayer;
      var b = item.strPosition;
      var c = item.strThumb;
      var d = item.strDescriptionEN
      return <div className="row">
              <div className="col-xs-12 col-lg-12">
                <div className="panel panel-primary">
                  <div className="panel-heading">
                  <h4><b>{a} ({b})</b></h4>
                  </div>
                  <div className="panel-body">
                    <div className="col-lg-4">
                    <img src={c} alt="ok" width='300px' height='300px'/>
                    </div>
                    <div className="col-lg-8">
                    <p>{d}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    })
    return (
      <div className="container">
        <center>
          <h1>Daftar Pemain {this.state.name}</h1>
          <div className="row">
            <div className="col-md-8">
              <input className="form-control" ref="name" type="text" onInput={()=>{this.Click();}}/>
            </div>
            <div className="col-md-4">
              <button type="submit" className="btn btn-success btn-block" onClick={()=>{this.Clicky();}}>
              Lihat Daftar
              </button>
            </div>
          </div>
        </center>
        <br/>
        {data}
      </div>
    );
  }
}

export default App;