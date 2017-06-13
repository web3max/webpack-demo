import React, { Component } from 'react';
import config from './config.json';
import styles from './Greeter.css'; //导入 .root 到 Greeter.js 中

class Greeter extends Component {
    render() {
        return ( <div className={styles.root}> { config.greetText } </div>);
        }
    }

    export default Greeter;
