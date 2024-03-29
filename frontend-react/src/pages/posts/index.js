import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Card, Container, Row, Col, Button, Table } from 'react-bootstrap'

import axios from 'axios';

function PostIndex(){
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fectData();
    }, []);

    const fectData = async () => {
        const response = await axios.get('http://localhost:3001/api/posts');
        const data = await response.data.data;
        
        setPosts(data);
    };

    const deletePost = async (id) => {
        // eslint-disable-next-line no-template-curly-in-string
        await axios.delete(`http://localhost:3001/api/posts/delete/${id}`);

        fectData();
    };

    return(
        <Container className='mt-3'>
            <Row>
                <Col md='{12}'>
                    <Card.Body>
                        <Button as={Link} to='/posts/create' variant='success' className='mb-3'>TAMBAH POST</Button>
                        <Table striped bordered hover className='mb-1'>
                            <thead>
                                <tr>
                                    <th>NO.</th>
                                    <th>TITLE</th>
                                    <th>CONTENT</th>
                                    <th>AKSI</th>
                                </tr>
                            </thead>
                            <tbody>
                                {posts.map((post, index) => (
                                    <tr key={ post.id }>
                                        <td>{ index + 1 }</td>
                                        <td>{ post.title }</td>
                                        <td>{ post.content }</td>
                                        <td className='text-center'>
                                            <Button as={Link} to={`/posts/edit/${post.id}`} variant='primary' size='sm' className='me-2'>EDIT</Button>
                                            <Button onClick={() => deletePost(post.id)} variant='danger' size='sm'>DELETE</Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Card.Body>
                </Col>
            </Row>
        </Container>
    )
}

export default PostIndex;