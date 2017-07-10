import React, { Component } from 'react';

class Goals extends Component {

    constructor(props) {
        super(props);

        this.state = {
            goal: ""
        };

        this.onGoalChange = this.onGoalChange.bind(this);
        this.setGoal = this.setGoal.bind(this);
    }

    onGoalChange(event) {
        this.setState({ goal: event.target.value });
    }

    setGoal(){
        this.props.setGoal(parseInt(this.state.goal, 10));
    }

    render() {
        return (
            <div>
                <h1>Goals</h1>
                { this.props.currentGoal ? (
                    <div>{ this.props.currentGoal } hrs</div>
                ) : (
                    <div>No goals set</div>
                )}
                <br/>
                <div>
                    <input type="text" onChange={ this.onGoalChange } value={ this.state.goal }/>
                    <button onClick={ this.setGoal }>Set</button>
                </div>
            </div>
        );
    }

}

export default Goals;