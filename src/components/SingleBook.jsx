import { Card, Button } from 'react-bootstrap'

import fantasy from '../data/fantasy.json'

export default function SingleBook() {
    console.log(fantasy)
    return <div>{
        fantasy.map(book => {
            return <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={book.img} />
                <Card.Body>
                    <Card.Title>{book.title}</Card.Title>
                    <Button variant="primary">Buy Now!</Button>
                </Card.Body>
            </Card>
        })
    }</div>
}

