import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table } from 'antd';
import userTableColumns from './TableColumns';
import './styles.scss';

const PAGE_LIMIT = 5;

function UsersPage() {
  const [userData, setUserData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Fetch All Users
  useEffect(() => {
    const fetchAllUsers = async () => {
      setIsLoading(true);
      try {
        const res = await axios(`${process.env.REACT_APP_API_EP}users`);
        setIsLoading(false);
        if (res.status === 200) {
          setUserData(res.data);
          console.log('success res:', res);
        } else {
          console.log('error res:', res);
        }
      } catch (err) {
        setIsLoading(false);
        console.log(err);
      }
    };

    fetchAllUsers();
  }, []);
  return (
    <div className="user-table__wrapper">
      <Table
        columns={userTableColumns}
        dataSource={userData}
        loading={isLoading}
        pagination={{
          defaultPageSize: PAGE_LIMIT,
          hideOnSinglePage: true,
          pageSizeOptions: ['5', '10', '20', '50', '100'],
          responsive: true,
        }}
      />
    </div>
  );
}

export default UsersPage;
