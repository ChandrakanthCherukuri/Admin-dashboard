import React from "react";
import {
  KanbanComponent,
  ColumnsDirective,
  ColumnDirective,
} from "@syncfusion/ej2-react-kanban";

const kanbanData = [
  {
    Id: 'Task 1',
    Title: 'Design homepage',
    Status: 'To Do',
    Summary: 'Create wireframe and UI for homepage',
  },
  {
    Id: 'Task 2',
    Title: 'API Integration',
    Status: 'In Progress',
    Summary: 'Integrate user authentication API',
  },
  {
    Id: 'Task 3',
    Title: 'Testing',
    Status: 'Testing',
    Summary: 'Write unit tests for all components',
  },
  {
    Id: 'Task 4',
    Title: 'Deployment',
    Status: 'Done',
    Summary: 'Deploy the app to production server',
  },
];

const Kanban = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Kanban Board</h2>
      <div className="bg-white dark:bg-gray-900 rounded-xl p-4 shadow-md">
        <KanbanComponent
          id="kanban"
          keyField="Status"
          dataSource={kanbanData}
          cardSettings={{ contentField: "Summary", headerField: "Title" }}
        >
          <ColumnsDirective>
            <ColumnDirective headerText="To Do" keyField="To Do" />
            <ColumnDirective headerText="In Progress" keyField="In Progress" />
            <ColumnDirective headerText="Testing" keyField="Testing" />
            <ColumnDirective headerText="Done" keyField="Done" />
          </ColumnsDirective>
        </KanbanComponent>
      </div>
    </div>
  );
};

export default Kanban;
