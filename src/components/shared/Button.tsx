import React, { Component } from 'react';

const classes = require('./Button.css');

interface IProps {
  id?: string;
  white?: boolean;
  imgSrc?: any;
  srcset?: any;
  txt?: string;
  onClick?: () => void;
}

export class Button extends Component<IProps, {}> {
  public render() {
    return (
      <div
        className={classes.btn}
        style={
          this.props.white
            ? { borderColor: '#fff', color: '#fff' }
            : { borderColor: '#000', color: '#000' }
        }
        onClick={() => this.props.onClick()}
      >
        {
          this.props.imgSrc
            ? <img
                src={this.props.imgSrc}
                srcSet={this.props.srcset}
                className={classes.logoImg}
              />
            : null
        }
        <span
          className={classes.txt}
          >{this.props.txt}</span>
      </div>
    );
  }
}

export default Button;
