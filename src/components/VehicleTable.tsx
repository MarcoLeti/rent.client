import React, { useState, useEffect } from 'react';
import { columns } from './VehicleTableColumns';
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from '@tanstack/react-table';
import { Box, Paper, Button, Tab, Tabs } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import DirectionsCarFilledIcon from '@mui/icons-material/DirectionsCarFilled';
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';
import PedalBikeIcon from '@mui/icons-material/PedalBike';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import { usePagination } from '../hooks/usePagination';
import { useSorting } from '../hooks/useSorting';
import { IVehicle } from '../types/interfaces/IVehicle';
import axios from 'axios';

const fetchCars = async (
  limit: number,
  skip: number,
  field: string,
  order: string,
  type: number
): Promise<IVehicle[]> => {
  try {
    const { data } = await axios.get<IVehicle[]>(
      'https://localhost:7166/vehicle',
      {
        params: {
          limit, // pagination
          skip, // pagination
          field, // sorting
          order, // sorting
          type,
        },
      }
    );

    // Process response data here
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};

const VehiclesTable = () => {
  const { limit, onPaginationChange, skip, pagination, resetPagination } =
    usePagination();

  const [pagBtnClicked, setPagBtnClicked] = React.useState<boolean>(false);

  const { sorting, onSortingChange, field, order } = useSorting();

  const [isLoading, setLoading] = useState(false);

  /*const theme = useTheme();*/

  const [data, setData] = useState<IVehicle[]>([]);

  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  useEffect(() => {
    setLoading(true);
    fetchCars(limit, skip, field, order, value + 1).then(
      (_data: IVehicle[]) => {
        if (pagBtnClicked) {
          setData((prevData) => [...prevData, ..._data]);
        } else {
          setData(_data);
          resetPagination();
        }

        setLoading(false);
      }
    );
    setPagBtnClicked(false);
  }, [limit, skip, field, order, value]);

  const handlePagBtnClick = () => {
    setPagBtnClicked(true);
    table.nextPage();
  };

  const table = useReactTable({
    data: data,
    columns: columns,
    state: {
      pagination,
      sorting,
    },
    getCoreRowModel: getCoreRowModel(),
    manualPagination: true,
    onPaginationChange: onPaginationChange,
    onSortingChange: onSortingChange,
    manualSorting: true,
    //onSortingChange: setSorting,
  });

  /*const baseBackgroundColor =
    theme.palette.mode === 'dark'
      ? 'rgba(3, 44, 43, 1)'
      : 'rgba(255, 255, 255, 1)';*/

  if (isLoading) {
    /*return <>Loading...</>*/
  }

  /* TODO change bgcolor to respect theme */
  return (
    <>
      <p>
        {data.length} of {37} rows fetched
      </p>
      <Paper>
        <Box
          sx={{
            bgcolor: 'white',
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="icon position tabs example"
          >
            <Tab
              icon={<DirectionsCarFilledIcon />}
              iconPosition="start"
              label="Cars"
            />
            <Tab icon={<TwoWheelerIcon />} iconPosition="start" label="Moto" />
            <Tab
              icon={<PedalBikeIcon />}
              iconPosition="start"
              label="Bicycle"
            />
          </Tabs>
        </Box>
      </Paper>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="Vehicles Table">
          <TableHead>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableCell key={header.id}>
                    <div
                      style={{
                        cursor: header.column.getCanSort() ? 'pointer' : 'auto',
                        userSelect: 'none',
                      }}
                      onClick={
                        header.column.getCanSort()
                          ? header.column.getToggleSortingHandler()
                          : undefined
                      }
                    >
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                      {{
                        asc: ' 🔼',
                        desc: ' 🔽',
                      }[header.column.getIsSorted() as string] ?? null}
                    </div>
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableHead>
          <TableBody>
            {table.getRowModel().rows.map((row, rowIndex) => (
              <TableRow
                key={row.id}
                sx={{
                  backgroundColor: rowIndex % 2 === 0 ? '#f5f5f5' : '#ffffff',
                }}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id} component="th" scope="row">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box
        component="section"
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          p: 2,
          backgroundColor: 'white',
        }}
      >
        <Button variant="text" onClick={handlePagBtnClick}>
          <b>More Vehicles</b>
          <KeyboardArrowDownIcon />
        </Button>
      </Box>
    </>
  );
};

export default VehiclesTable;
