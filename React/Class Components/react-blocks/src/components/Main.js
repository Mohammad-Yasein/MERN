import React, { Component } from 'react';
import style from '../styles/Main.module.css';

export class Main extends Component {
  render() {
    return <div className={style.main}>{this.props.children}</div>;
  }
}

export default Main;
