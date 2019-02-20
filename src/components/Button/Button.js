import React, {Component} from "react";
import './Button.css';


class Button extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    console.log('[Button] ShouldUpdate');
    return nextProps.btnType !== this.props.btnType;
  }

  render() {
    return (
      <button
        className={['Button', this.props.btnType].join(' ')}
        onClick={this.props.click}
      >
        {this.props.children}
      </button>
    );
  }
}
export default Button;