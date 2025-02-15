import { Box } from '@mui/material';
import CalendarBoxProps from './props/CalendarBoxProps';
import { useEffect, useRef, useState } from 'react';
import invariant from 'tiny-invariant';
import { dropTargetForElements } from '@atlaskit/pragmatic-drag-and-drop/element/adapter';

type Coord = [number, number];

function isCoord(token: unknown): token is Coord {
  return (
    Array.isArray(token) &&
    token.length === 2 &&
    token.every((val) => typeof val === 'number')
  );
}

const CalendarBox = ({ index }: CalendarBoxProps) => {
  const ref = useRef(null);
  const [isDraggedOver, setIsDraggedOver] = useState(false);

  useEffect(() => {
    const el = ref.current;
    invariant(el);

    return dropTargetForElements({
      element: el,
      onDragEnter: ({ source }) => {
        // add type guards
        /*if (!isCoord(loc)) {
          return;
        }*/

        console.log(source.data.left);
        console.log(source.data.width);
        setIsDraggedOver(true);
      },
      onDragLeave: () => setIsDraggedOver(false),
      onDrop: () => setIsDraggedOver(false),
    });
  }, []);

  return (
    <Box
      key={`empty-${index}`}
      sx={{
        width: 30,
        height: 50,
        border: 1,
        borderColor: 'grey.500',
        backgroundColor: isDraggedOver ? 'grey' : 'white',
      }}
      ref={ref}
    ></Box>
  );
};

export default CalendarBox;
