import React from 'react';
import ListElement from './ListElement';
class MenuBody extends React.Component{
    constructor(props){
        super();
        this.state = {

        }
    }
getColor = () =>{
    let colors = ["#ff7eb9","#ff65a3","#7afcff","#feff9c","#fff740"];
    return colors[Math.floor(Math.random() * 5)];
}
    render(){
        return (
            <div>
                {this.props.listElement.map((value)=>{
                   return <ListElement key={value.id} color={this.getColor}/>
                })}
            </div>
        )
    }
}
export default MenuBody;