import React, { Component } from 'react';
import Lane from '../containers/LaneContainer';
import '../css/KanbanBoard.css';
import EditCardModal from '../containers/EditCardModalContainer';
import keycode from 'keycode';

export default class KanbanBoard extends Component {
    render() {
        return (
            <div className="appContainer">
                <div className="kanbanBoard">
                    <Lane id="todo" title="To do" />
                    <Lane id="inprogress" title="In Progress" />
                    <Lane id="pendding" title="Pendding" />
                    <Lane id="done" title="Done" />
                </div>
                <EditCardModal />
            </div>
        )
    }
}