import React, { useEffect, useState } from 'react';
import { Button, Card, Container, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { addTask } from '../services/addReducer';

const AddTask = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const location = useLocation();
    const taskToEdit = location.state?.task;

    const [id , setID]  = useState(taskToEdit ? taskToEdit.id : '');
    const [title, setTitle] = useState(taskToEdit ? taskToEdit.title : '');
    const [note, setNote] = useState(taskToEdit ? taskToEdit.note : '');

    const formStyle = {
        width: '50%',
        marginTop: '50px',
    };

    const buttonStyle = {
        marginTop: '20px',
    };

    useEffect(() => {
        if (taskToEdit) {
            setID(taskToEdit.id);
            setTitle(taskToEdit.title);
            setNote(taskToEdit.note);
            console.log(taskToEdit.id);
        }
    }, [taskToEdit]);

    const handleSubmit = (e) => {
        e.preventDefault();
        
            dispatch(addTask({ title, note }));
        
        setTitle('');
        setNote('');
        navigate('/all-tasks');
    };

    return (
        <Container style={formStyle}>
            <Card>
                <Card.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formTitle">
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter a title here"
                                value={title}
                                onChange={e => setTitle(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="formNote">
                            <Form.Label>Your Note</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={4}
                                placeholder="Enter your note here"
                                value={note}
                                onChange={e => setNote(e.target.value)}
                                style={{ resize: 'none' }}
                            />
                        </Form.Group>

                        <Button variant="primary" type="submit" style={buttonStyle}>
                            Save
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default AddTask;
