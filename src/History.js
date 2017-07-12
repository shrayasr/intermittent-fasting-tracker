import React, { Component } from 'react';
import moment from 'moment';

import { getFastingTime } from './Utils';

class History extends Component {

    render() {

        var historyEntries = this.props.history.map((h) => {

            var from = moment(h.startedAt.toString()).format("Do MMMM YYYY hh:mm");
            var to = moment(h.endedAt.toString()).format("Do MMMM YYYY hh:mm");

            var fastingFor = getFastingTime(h.startedAt, h.endedAt);

            return (
                <tr key={ h.id }>
                    <td>{ from }</td>
                    <td>{ to }</td>
                    <td>{ fastingFor }</td>
                </tr>
            );

        });

        historyEntries.reverse();

        return (
            <div>
                <h1>History</h1>
                <table>
                    <tbody>
                        { historyEntries.length > 0
                            ? historyEntries
                            : <tr><td colSpan={3}>No records</td></tr>
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default History;