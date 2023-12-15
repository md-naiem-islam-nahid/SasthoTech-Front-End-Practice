import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table, Button, Container } from 'react-bootstrap';
import { deleteTask } from '../services/addReducer';
import {  useNavigate } from 'react-router-dom';

const AllTasks = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks);
  

  const navigate = useNavigate();

  const handleEdit = (task) => {
    navigate('/add-task', { state: { task: task } });
  };

  return (
    <Container className="d-flex justify-content-center">
      <Table striped bordered hover size="sm" style={{ maxWidth: '600px' }}>
        <thead>
          <tr>
            <th>Title</th>
            <th>Note</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <td>{task.title}</td>
              <td>{task.note}</td>
              <td>
                <Button variant="primary" size="sm" onClick={() => handleEdit(task)}>Edit</Button>{' '}
                <Button variant="danger" size="sm" onClick={() => dispatch(deleteTask(task.id))}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  )
}

export default AllTasks;
