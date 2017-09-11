import React, { Component } from 'react';
import LaneContainer from '../containers/LaneContainer';
import '../css/KanbanBoard.css';

export default class KanbanBoard extends Component {
    render() {
        return (
            <div className="kanbanBoard">
                <LaneContainer id="todo" title="To do" />
                <LaneContainer id="inprogress" title="In Progress" />
                <LaneContainer id="pendding" title="Pendding" />
                <LaneContainer id="done" title="Done" />                
            </div>
        )
    }
}