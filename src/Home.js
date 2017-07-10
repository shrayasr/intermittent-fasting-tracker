import React, { Component } from 'react';

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
        return (
            <div>
                <h1>Home</h1>
                { this.props.isFasting ? (
                    <div>
                        <h2>Fasting since { this.props.fastingStartAt && this.props.fastingStartAt.toString() }</h2>
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