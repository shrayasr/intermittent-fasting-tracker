import React, { Component } from 'react';
import moment from 'moment';

import { getFastingTime } from './Utils';

class Home extends Component {

    constructor(props) {
        super(props);

        this.startFasting = this.startFasting.bind(this);
        this.stopFasting = this.stopFasting.bind(this);
    }

    startFasting() {
        this.props.setStatus(true);
    }

    stopFasting() {
        this.props.setStatus(false);
    }

    render() {

        var isFasting = this.props.isFasting;

        var fastingStart = isFasting ? moment(this.props.fastingStartAt.toString()).format("Do MMMM YYYY hh:mm") : null;
        var fastingSince = fastingStart ? getFastingTime(this.props.fastingStartAt.toString(), new Date().toString()) : "";

        return (
            <div>
                <h1>Home</h1>
                { isFasting ? (
                    <div>
                        <h2>Fasting since { fastingStart } ({ fastingSince })</h2>
                        <button onClick={ this.stopFasting }>Stop</button>
                    </div>
                ) : (
                    <div>
                        <h2>Not fasting</h2>
                        <button onClick={ this.startFasting }>Start</button>
                    </div>
                )}
            </div>
        )
    }

}

export default Home;