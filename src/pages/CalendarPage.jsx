import React from 'react';
import {
  ScheduleComponent,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
  Inject,
  Resize,
  DragAndDrop
} from '@syncfusion/ej2-react-schedule';
import { scheduleData } from './data';
import Header from '../components/Header';

const CalendarPage = () => {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
  <Header category="App" title="Calendar" />
  <ScheduleComponent
    height='650px'
    eventSettings={{ dataSource: scheduleData }}
  >
    <Inject services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]} />
  </ScheduleComponent>
</div>
  );
};

export default CalendarPage;
