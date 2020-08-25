import React, {Component} from "react";

class MasaiButton extends Component{
    
    constructor(props){
        super(props)
        
        this.state = {
            name: 'MASAI'
        }

    }
    handleChange = ()=>{
        console.log(this.state.name)
        this.setState({name: 'MASAI SCHOOL'})
    }
    render(){
        return(
            <div>
                <div>
                    {this.state.name}
                </div>
                <div>
                    <button onClick = {this.handleChange}>CHANGE</button>
                </div>
            </div>
        )
    }
}

export default MasaiButton;