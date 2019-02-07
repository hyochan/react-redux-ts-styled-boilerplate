import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import Button from '../shared/Button';

import classNames from 'classnames/bind';
import { getString } from '../../utils/Locale';
const classes = require('./Intro.css');
const cx = classNames.bind(classes);

class Intro extends Component<{}, {}> {
  public render() {
    const containerClass = cx({
      container: true,
      background: true,
    });
    return(
      <div className={containerClass}>
      <div className={classes.box}>
          <Button
            id='btn'
            onClick={() => this.onClick()}
            white={true}
            txt={getString('BUTTON')}
          />
        </div>
      </div>
    );
  }

  private onClick = () => {
    alert('clicked');
  }
}

export default Intro;
