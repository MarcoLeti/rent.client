import { Paper } from '@mui/material';
import { Page } from '../components/Page';
import CalendarDnd from '../components/CalendarDnd';

export const ReservationCalendar = () => (
  <Page title="Calendar">
    <Paper elevation={3}>
      <CalendarDnd />
    </Paper>
  </Page>
);
