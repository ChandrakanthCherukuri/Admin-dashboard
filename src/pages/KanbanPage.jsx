import React, { useState } from "react";
import {
  DragDropContext,
  Droppable,
  Draggable,
} from "@hello-pangea/dnd";
import "../styles/kanban.css"; // Make sure this path matches where your CSS file is

const initialTasks = {
  todo: [{ id: "1", content: "Design UI" }],
  inProgress: [{ id: "2", content: "Develop backend" }],
  done: [{ id: "3", content: "Deploy app" }],
};

const KanbanPage = () => {
  const [tasks, setTasks] = useState(initialTasks);

  const onDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) return;

    const sourceCol = source.droppableId;
    const destCol = destination.droppableId;

    const sourceTasks = [...tasks[sourceCol]];
    const [movedTask] = sourceTasks.splice(source.index, 1);

    const destTasks = [...tasks[destCol]];
    destTasks.splice(destination.index, 0, movedTask);

    setTasks({
      ...tasks,
      [sourceCol]: sourceTasks,
      [destCol]: destTasks,
    });
  };

  const columnTitles = {
    todo: "To Do",
    inProgress: "In Progress",
    done: "Done",
  };

  return (
    <div className="kanban-board">
      <DragDropContext onDragEnd={onDragEnd}>
        {Object.keys(tasks).map((colId) => (
          <Droppable droppableId={colId} key={colId}>
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className="kanban-column"
              >
                <h3 className="kanban-title">{columnTitles[colId]}</h3>
                {tasks[colId].map((task, index) => (
                  <Draggable
                    key={task.id}
                    draggableId={task.id}
                    index={index}
                  >
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className="kanban-task"
                      >
                        {task.content}
                      </div>
                    )}
                  </Draggable>
                ))}
                <div className="kanban-placeholder">
                  {provided.placeholder}
                </div>
              </div>
            )}
          </Droppable>
        ))}
      </DragDropContext>
    </div>
  );
};

export default KanbanPage;
