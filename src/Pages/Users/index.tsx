import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Col, Table, Modal, Form, Button, Input } from 'antd';
import userTableColumns from './TableColumns';
import NoteComponent from './NoteComponent';
import './styles.scss';

const PAGE_LIMIT = 5;
interface usersObject {
  id: string;
  name: string;
  email: string;
  position: string;
}

function UsersPage() {
  const [userData, setUserData] = useState<usersObject[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [form] = Form.useForm();

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    form.resetFields();
  };

  const fetchAllUsers = async () => {
    setIsLoading(true);
    try {
      const res = await axios(`${process.env.REACT_APP_API_EP}users`);
      setIsLoading(false);
      if (res.status === 200 || res.status === 201) {
        const sortedDescRes = res.data.sort(
          (a: usersObject, b: usersObject) =>
            parseInt(b.id, 10) - parseInt(a.id, 10)
        );
        setUserData(sortedDescRes);
      } else {
        console.log('error:', res);
      }
    } catch (err) {
      setIsLoading(false);
      console.log(err);
    }
  };

  const handleSubmit = async (values: usersObject) => {
    setIsLoading(true);
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_EP}users`,
        values
      );
      setShowModal(false);
      if (res.status === 200 || res.status === 201) {
        await fetchAllUsers();
      } else {
        console.log('res error:', res);
      }
    } catch (err) {
      setIsLoading(false);
      console.log(err);
    }
  };

  useEffect(() => {
    fetchAllUsers();
  }, []);
  return (
    <div className="user-table__wrapper">
      <Col span={24}>
        <h1>Table</h1>
      </Col>
      <NoteComponent />
      <Button
        type="primary"
        onClick={handleShowModal}
        style={{ marginBottom: 10 }}
      >
        + New
      </Button>
      <Table
        columns={userTableColumns}
        dataSource={userData}
        loading={isLoading}
        rowKey="id"
        pagination={{
          defaultPageSize: PAGE_LIMIT,
          hideOnSinglePage: true,
          pageSizeOptions: ['5', '10', '20', '50', '100'],
          responsive: true,
        }}
      />
      <Modal
        title="Add New I  tem"
        visible={showModal}
        onOk={form.submit}
        onCancel={handleCloseModal}
      >
        <Form form={form} onFinish={handleSubmit}>
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: 'Please input your name!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: 'Please input your Email!',
                type: 'email',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Position"
            name="position"
            rules={[{ required: true, message: 'Please input your Position!' }]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}

export default UsersPage;
