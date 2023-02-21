import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import React from 'react'

export default function Details() {
  return (
    <div>
          <Card >
      <Card.Body>
        {/* <Card.Title>Bmw</Card.Title> */}
        <Card.Text>
         <h1> BMW X8 </h1>
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <section className="row">
        <section className='col-6'>
        <ListGroup.Item>name : </ListGroup.Item>
        <ListGroup.Item>price : </ListGroup.Item>
        <ListGroup.Item>transmission :</ListGroup.Item>
        </section>
        <section className='col-6'>
        <ListGroup.Item>Color : </ListGroup.Item>
        <ListGroup.Item>Location :  </ListGroup.Item>
        <ListGroup.Item>Motor : </ListGroup.Item>
        </section>
    </section>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Phone Number</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
    </div>
  )
}
