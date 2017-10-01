import React, { Component } from 'react';
import Lane from '../containers/LaneContainer';
import '../css/KanbanBoard.css';
import EditCardModal from '../containers/EditCardModalContainer';

export default class KanbanBoard extends Component {
    render() {
        return (
            <div className="appContainer">
                <div className="kanbanBoard">
                    <Lane laneId="todo" title="To do" />
                    <Lane laneId="inprogress" title="In Progress" />
                    <Lane laneId="pendding" title="Pendding" />
                    <Lane laneId="done" title="Done" />
                </div>
                <EditCardModal />
            </div>
        )
    }
}