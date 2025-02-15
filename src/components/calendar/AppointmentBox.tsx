import { Box } from '@mui/material';
import AppointmentBoxProps from './props/AppointmentBoxProps';
import { useEffect, useRef, useState } from 'react';
import { draggable } from '@atlaskit/pragmatic-drag-and-drop/element/adapter';
import invariant from 'tiny-invariant';

const AppointmentBox = ({ index, left, width }: AppointmentBoxProps) => {
  const ref = useRef(null);
  const [dragging, setDragging] = useState<boolean>(false);

  useEffect(() => {
    const el = ref.current;
    invariant(el);

    return draggable({
      element: el,
      getInitialData: () => ({ left, width }),
      onDragStart: () => setDragging(true),
      onDrop: () => setDragging(false),
    });
  }, [left, width]);

  return (
    <Box
      key={`appointment-${index}`}
      sx={{
        position: 'absolute',
        left: left,
        width: width,
        height: 50,
        backgroundColor: 'green',
        zIndex: 1, // Ensure the appointment box is above the empty boxes
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: 1,
        borderColor: 'grey.500',
        color: 'white',
        fontWeight: 'bold',
        opacity: dragging ? 0.4 : 1,
      }}
      ref={ref}
    >{`Appointment ${index + 1}`}</Box>
  );
};

export default AppointmentBox;
