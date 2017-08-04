import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import './App.css'
import Goals from './Goals';
import Home from './Home';
import History from './History';
import { ID } from './Utils';

import 'bulma/css/bulma.css';

import { Container, Hero, Navbar, NavbarLink } from './Styles';

class App extends Component {

    constructor(props) {
        super(props);

        var localState = this.getLocalState();

        if (localState) {
            this.state = {
                currentGoal: localState.currentGoal,
                isFasting: localState.isFasting,
                fastingStartAt: localState.fastingStartAt,
                history: localState.history
            };
        }
        else {
            var state = {
                currentGoal: null,
                isFasting: false,
                fastingStartAt: null,
                history: []
            };

            this.setLocalState(state);
            this.state = state;
        }

        this.setGoal = this.setGoal.bind(this);
        this.setStatus = this.setStatus.bind(this);
    }

    getLocalState = () => {
        var state = localStorage.getItem("state");
        return JSON.parse(state);
    }

    setLocalState = (state) => localStorage.setItem("state", JSON.stringify(state));

    setGoal(goal) {

        var localState = this.getLocalState();
        var newState = { ...localState, currentGoal: goal };
        this.setLocalState(newState);

        this.setState({ currentGoal: goal });
    }

    setStatus(isFasting) {

        var localState = this.getLocalState();
        var newState = {};

        if (isFasting) {

            var now = new Date();

            newState = { ...localState, isFasting: true, fastingStartAt: now };
            this.setLocalState(newState);

            this.setState({
                isFasting: true,
                fastingStartAt: now
            });
        }
        else {
            var history = this.state.history;
            history.push({
                id: ID(),
                startedAt: this.state.fastingStartAt,
                endedAt: new Date()
            });

            newState = {
                ...localState,
                isFasting: false,
                fastingStartAt: null,
                history: history
            };
            this.setLocalState(newState);

            this.setState({
                isFasting: false,
                fastingStartAt: null,
                history: history
            });
        }
    }

    render() {

        return (
            <Router>
                <Container>
                    <div id="app">
                        <Hero>
                            <Link to={"/"}>Intermittent Fasting Tracker</Link>
                            { this.state.currentGoal && (
                                <span> ({ this.state.currentGoal }:{ (24 - this.state.currentGoal )})</span>
                            )}
                            { this.state.isFasting && <span> *</span> }
                        </Hero>
                        <Navbar>
                            <NavbarLink to={"/"}>Home</NavbarLink>
                            <NavbarLink to={"/history"}>History</NavbarLink>
                            <NavbarLink to={"/goals"}>Goals</NavbarLink>
                        </Navbar>
                        <Route path="/goals" render={ () => (
                            <Goals 
                                currentGoal={ this.state.currentGoal }
                                setGoal= { this.setGoal }
                            />
                        )} />
                        <Route path="/history" render={ () => (
                            <History
                                history = { this.state.history }
                            />
                        )} />
                        <Route exact={true} path="/" render={ () => (
                            <Home
                                isFasting = { this.state.isFasting }
                                setStatus = { this.setStatus }
                                fastingStartAt = { this.state.fastingStartAt }
                            />
                        )} />
                    </div>
                </Container>
            </Router>
        );
    }

}

export default App;