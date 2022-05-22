import React from 'react';
import { Spinner, Col, Row } from 'react-bootstrap';


export function Loader () {
  return (
    <div className="d-flex justify-content center mt-5 " style={{ height: '100vh' }} >
        <Row>
            <Col>
                <Spinner
                    className=""
                    role="status"
                    style={{height: '5vh', width: '5vh'}}
                >

                </Spinner>
            </Col>
        </Row>
        <Row>
            <Col>
                <div className="mx-3">
                    fetching pokemon...
                </div>
            </Col>
        </Row>
    </div>
  )
}