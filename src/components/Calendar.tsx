/*import { Box } from '@mui/material';
import dayjs from 'dayjs';
import { useState } from 'react';
import AppointmentBox from './calendar/AppointmentBox';
import CalendarBox from './calendar/CalendarBox';
import { JSX } from 'react/jsx-runtime';
import Example from '../../../../../pragmatic-drag-and-drop/packages/core/examples/preserve-offset-on-source';*/

//const days: number[] = Array.from({ length: 30 }, (_, i) => i + 1);

/*type DayInfo = {
  dayNumber: number;
  dayName: string;
};

function getDatesForMonth(year: number, month: number): DayInfo[] {
  const daysInMonth = dayjs(`${year}-${month}-01`).daysInMonth();
  const daysArray = Array.from({ length: daysInMonth }, (_, i) => {
    const date = dayjs(`${year}-${month}-${i + 1}`);
    return {
      dayNumber: i + 1,
      dayName: date.format('ddd'), // 'ddd' format returns the abbreviated name of the day
    };
  });
  return daysArray;
}

function RenderVehicleDays(days: DayInfo[]): JSX.Element[] {
  const squares: JSX.Element[] = [];
  {
    days.map((_, index) => squares.push(<CalendarBox index={index} />));
  }
  return squares;
}

function RenderCalendarDays(days: DayInfo[]): JSX.Element[] {
  const squares: JSX.Element[] = [];
  {
    days.map((item, index) =>
      squares.push(
        <Box
          key={index}
          sx={{
            width: 30,
            height: 50,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center', // Centers content vertically
            alignItems: 'center', // Centers content horizontally
            border: 1,
            borderColor: 'grey.500',
          }}
        >
          <Box>{item.dayName}</Box>
          <Box>{item.dayNumber}</Box>
        </Box>
      )
    );
  }
  return squares;
}*/

/*const Calendar = () => {
  const [days, setDays] = useState(getDatesForMonth(2024, 6));

  // Define appointments with start and end days
  const appointments = [{ startDay: 5, endDay: 10 }];

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        {RenderCalendarDays(days)}
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          position: 'relative', // Ensure the green boxes can be absolutely positioned
        }}
      >
        {RenderVehicleDays(days)}
        {appointments.map((appointment, index) => {
          const startDay = appointment.startDay;
          const endDay = appointment.endDay;
          const startIdx = startDay - 1;
          const endIdx = endDay - 1;
          const width = (endIdx - startIdx + 1) * 30; // Calculate width based on number of days
          const left = startIdx * 30; // Calculate left position based on start day

          return <AppointmentBox index={index} left={left} width={width} />;
        })}
      </Box>
    </>
  );
};*/

const Calendar = () => {
  return <></>;
};

export default Calendar;
