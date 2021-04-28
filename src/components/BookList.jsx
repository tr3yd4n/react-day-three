import { ListGroup } from 'react-bootstrap'

import fantasy from '../data/fantasy.json'

const BookList = (fantasy) => (
    <ListGroup>
        <ListGroup.Item>hello</ListGroup.Item>
        <ListGroup.Item>{fantasy.title}</ListGroup.Item>
        <ListGroup.Item>Morbi leo risus</ListGroup.Item>
        <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
    </ListGroup>
)

export default BookList