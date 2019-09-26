import React from "react";
import {
  Calendar as BigCalendar,
  Navigate,
  momentLocalizer
} from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

const formats = {
  weekdayFormat: "dddd"
};

const CustomEvent = () => <span />;

const CustomToolbar = props => {
  const { label, onNavigate } = props;
  return (
    <div className="rbc-toolbar">
      <span className="rbc-toolbar-label">{label}</span>
      <span className="rbc-btn-group">
        <button type="button" onClick={() => onNavigate(Navigate.PREVIOUS)}>
          PREV
        </button>
        <button type="button" onClick={() => onNavigate(Navigate.NEXT)}>
          NEXT
        </button>
      </span>
    </div>
  );
};

const Calendar = ({ events }) => {
  return (
    <BigCalendar
      localizer={localizer}
      events={events}
      startAccessor="start"
      endAccessor="end"
      formats={formats}
      views={{
        month: true
      }}
      components={{
        toolbar: CustomToolbar,
        event: CustomEvent
      }}
      onSelectEvent={event => {
        console.log(event);
      }}
    />
  );
};

export default Calendar;
