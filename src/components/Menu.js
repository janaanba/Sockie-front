import React from 'react';
import Header from './Header';
import MenuBody from './MenuBody';

class Menu extends React.Component{
    constructor(props){
        super();
        this.state = {

        };
    }
    render(){
        return (
            <div style={{height:'100%',width:'50%',flex:1}}>
            <Header menu={true} addFunc={this.props.addFunc}/>
            <MenuBody listElement={this.props.listElement}/>
            </div>
        )
    }
}
export default Menu;