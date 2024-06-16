import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { IoMdMenu } from 'react-icons/io';
import { ordersGrid, ordersData } from '../data/dummy';
import { Sidebar } from '../components';


const Orders = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="container bg-white rounded-3xl">
      <Sidebar isOpen={sidebarOpen} toggle={setSidebarOpen} />      
        <button onClick={toggleSidebar} className="p-4">
          <IoMdMenu size={24} />
        </button>
      <div className="m-2 md:m-10 mt-24 p-2 md:p-10">
    <Box sx={{ height: 400, width: '100%' }}>
    <DataGrid
      rows={ordersData}
      columns={ordersGrid}
      initialState={{
        pagination: {
          paginationModel: {
            pageSize: 10,
          },
        },
      }}
      pageSizeOptions={[5]}
      checkboxSelection
      disableRowSelectionOnClick
    />
  </Box>
  </div>
  </div>
  );
};

export default Orders;
