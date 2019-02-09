import React, { Component } from "react";
import { ButtonSpinner } from './Spinner';
//import './common.css';


class Button extends React.Component {
    render() {
        return (
            <button
	       disabled={this.props.disabled || this.props.refreshing}
	       className="button"
	       style={{...this.props.style}}
	       onClick={this.props.onClick}
	       refreshing={(this.props.refreshing || false).toString()}
	       >
	      
              {this.props.refreshing ? <ButtonSpinner/> : this.props.label } 
            </button>
        );
    }
}


export default Button;
