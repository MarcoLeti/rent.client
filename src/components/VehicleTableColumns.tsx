import { IVehicle } from '../types/interfaces/IVehicle';
import { Box } from '@mui/material';
import { createColumnHelper } from '@tanstack/react-table';

const columnHelper = createColumnHelper<IVehicle>();

export const columns = [
  columnHelper.accessor((row) => row.avatar, {
    id: 'Avatar',
    cell: (info) => (
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
        }}
      >
        <img
          alt="avatar"
          height={30}
          src={info.getValue()}
          loading="lazy"
          style={{ borderRadius: '50%' }}
        />
      </Box>
    ),
    header: () => <span></span>,
    enableSorting: false,
  }),
  columnHelper.accessor((row) => row.brand, {
    id: 'Brand',
    cell: (props) => (
      <span>
        <b>{`${props.getValue()}, ${props.row.original.model}`}</b>
      </span>
    ),
    header: () => <span>Marca</span>,
  }),
  columnHelper.accessor((row) => row.plateNumber, {
    id: 'PlateNumber',
    cell: (info) => info.getValue(),
    header: () => <span>Targa</span>,
  }),
  columnHelper.accessor((row) => row.inspection, {
    id: 'Inspection',
    cell: (info) => info.getValue(),
    header: () => <span>Revisione</span>,
  }),
  columnHelper.accessor((row) => row.insurance, {
    id: 'Insurance',
    cell: (info) => info.getValue(),
    header: () => <span>Assicurazione</span>,
  }),
  columnHelper.accessor((row) => row.oilFilter, {
    id: 'OilFilter',
    cell: (info) => info.getValue(),
    header: () => <span>Olio/Filtro</span>,
  }),
  columnHelper.accessor((row) => row.battery, {
    id: 'Battery',
    cell: (info) => info.getValue(),
    header: () => <span>Batteria</span>,
  }),
];
