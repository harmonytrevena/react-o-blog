import React, { useEffect, useState } from "react";
import { Route, Link } from "react-router-dom";
import Task from "./Task";

import "bulma/css/bulma.css";
import { Column, Columns, Title, Box } from "bloomer";

const TaskList = props => {
    const [task, setTask] = useState([]);
    
    useEffect(() => {
        (async function () {
            const response = await fetch(`http://127.0.0.1:3333/tasks`);
            const taskData = await response.json();
            console.log("taskdata", taskData);
            setTask(taskData);
        })();
    }, [setTask]);
    
    return (
        <Columns isCentered>
            <Column isSize="3/4">
                {!!task.length ? (
                    <>
                        <Title hasTextAlign="centered">Tasks</Title>
                        <Route exact path="/">
                            <Box>
                            {task.map((task) => {
                                return (
                                    <>
                                        <p key={task.id}>
                                            {task.task_title}
                                        </p>
                                        <p>
                                            <Link to={`/task/${task.id}`}>View Details</Link>
                                        </p>
                                        <br/>
                                    </>
                                )
                            })}
                            </Box>
                        </Route>
                        <Route path={`/task/:task_number`}>
                            <Box>
                                <Link to="/">Return to Home</Link>
                                <Task tasks={task} />
                            </Box>
                        </Route>
                    </>
                ) : (
                    <p>No tasks added yet!</p>
                )}
            </Column>
        </Columns>
    )
}
export default TaskList;