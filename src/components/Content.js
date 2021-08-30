import React from 'react';
import Header from './Header';
import ContentBody from './ContentBody';

class Content extends React.Component{
    constructor(props){
        super();
        this.state={
            color: this.getColor()
        }
    }

    getColor = () =>{
        let colors = ["#ff7eb9","#ff65a3","#7afcff","#feff9c","#fff740"];
        return colors[Math.floor(Math.random() * 5)];
    }

    render(){
        return (
            <div style={{height:300,flex:1,backgroundColor:this.state.color, boxShadow:'rgba(0, 0, 0, 0.35) 0px 5px 15px', margin:5, borderRadius:'2%'}}>
                <div style={{height:42,filter:'brightness(90%)',backgroundColor:this.state.color}}>
                <Header deleteFunc={this.props.deleteFunc}/>
                </div>
                <ContentBody value={this.props.value} onChangeFunc={this.props.onChangeFunc}/>
            </div>
        )
    }
}
export default Content;