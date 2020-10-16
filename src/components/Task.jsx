import React from "react";
import { useParams } from "react-router-dom";

import "bulma/css/bulma.css";
import { Box, Title } from "bloomer";

const Task = props => {
    const { tasks } = props;
    const { task_number } = useParams();
    const task = tasks.find((task) => {
        return task.id === parseInt(task_number) ? task : null;
    });

    return (
        <>
            <Box>
                <Title isSize={4}>{task.task_title}</Title>
                <p>{task.task_details}</p>
                <p>{task.category}</p>
                <p>{task.due_date}</p>
                <p>{task.task_status}</p>
            </Box>
        </>
    )
}
export default Task;