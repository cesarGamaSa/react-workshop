import React from "react";
import { Route } from 'react-router-dom';

import TodoList from './shared/todo-list';
import TodoAdder from './shared/todo-adder';
import TodoView from './todo-view';

const ToDo = () => (
    <div>
        <h1>ToDo works!</h1>

        <div className="row">
            <div className="col-6">
                <TodoAdder />
            </div>

            <div className="col-6">
                <TodoList />
            </div>
        </div>

        <Route path="/todo-app/:id" component={TodoView}/>
        
    </div>
);

export default ToDo;