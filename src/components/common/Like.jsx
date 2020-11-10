import React, { Component } from 'react';
class Like extends Component {
    state = {  }
    render() { 
        let classes='fa fa-heart'
        if (this.props.liked){
            classes+='-O'
        }
        return <i className={classes} aria-hidden='true' style={{curser:'pointer'}} 
        onClick={this.props.onClick} />;
    }
}
 
export default Like;