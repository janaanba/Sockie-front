import './App.css';
import React from 'react';
import Content from './components/Content';
import {v4} from 'uuid';
import Menu from './components/Menu';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
const io = require("socket.io-client");
const ENDPOINT = "ws://localhost:4001";


class App extends React.Component {

  constructor(){
    super();
    this.state = {
      listElement: [],
      mapValue:{}
    }
    this.socket = io(ENDPOINT, {
      transport : ['websocket'] ,
      cors: {
        origin: "http://localhost:4001",
        credentials: true
      }
    });
  }

  componentDidMount(){
    this.socket.on('delete',(data)=>{
      this.deleteElement(data,'soc');
  })
  this.socket.on('add',(data)=>{
    this.addElement(data, 'soc');
  });
  this.socket.on('change',(data)=>{
    this.onChangeFunc(data.value, data.id,'soc');
  })
  }

  deleteElement = (value, flag)=>{
    let list = [...this.state.listElement];
    list.splice(list.indexOf(value),1);
    this.setState({listElement:list});
    if(flag !== 'soc'){
      this.socket.emit('delete',value);
    }
  }

  addElement = (val,flag) =>{
    let id = v4();
    if(flag === 'soc'){
      id = val;
    }
    this.setState({listElement:[...this.state.listElement,id]});
    if(flag !== 'soc'){
      this.socket.emit('add',id);
    }
  }

  onChangeFunc = (val, value, flag) =>{
    this.state.mapValue[value] = val;
    if(flag!=='soc'){
      this.state.mapValue[value] = val.target.innerHTML;
    }
    this.setState({mapValue:this.state.mapValue},()=>{
      if(flag!=='soc'){
        var range = document.createRange();
        range.selectNodeContents(val.target);
        range.collapse(false);
        var sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
      }
    });
    if(flag!=='soc'){
      this.socket.emit('change',{id:value, value:val.target.innerHTML});
    }
  }

  render(){
    const style = {
      margin: 0,
      top: 'auto',
      right: 20,
      bottom: 20,
      left: 'auto',
      position: 'fixed',
  };
  return (
    <div style={{height:'100%',width:'100%',display:'flex'}}>
    {/* <Menu addFunc={this.addElement} listElement={this.state.listElement}/> */}
    <div style={{width:'100%',height:'100%',display:'grid',gridTemplateColumns:'repeat(3,1fr)'}}>
    {this.state.listElement.map(value=>{
     return <Content value={this.state.mapValue[value]} onChangeFunc={(val)=>{this.onChangeFunc(val, value)}} deleteFunc={()=>{this.deleteElement(value)}} key={value}/>
    })}
    </div>
    <Fab onClick={this.addElement} style={style} aria-label={'Add'} color={'#04AA6D'}>
            <AddIcon />
          </Fab>
    </div>
  );
}
}

export default App;
