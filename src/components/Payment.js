import React, { useState } from 'react'
import { Row, Col, Card, Modal, Button, Form, Tab, Tabs, Table, Container } from 'react-bootstrap';
import Month from "../constants/Month"
import Year from "../constants/Year.json"

function Payment(props) {

    const [payment, setPayment] = useState({ cardNumber: "", year: "", month: "", cvv: "" })

    const handleChange = (evt) => {
        setPayment({ ...payment, [evt.target.name]: evt.target.value })
    }


    //  card validate
    const paymentSubmit = () => {
        if
            ((payment.cardNumber === "1001200130014001") || (payment.cardNumber === "1001 2001 3001 4001") &&
            payment.year === "2023" &&
            payment.cvv === "123" &&
            payment.month === "march") {
            alert("payment successful")
        }
        else {
            alert("please check own card details")
        }
    }


    return (
        <React.Fragment>
            <hr />
            <h5>PAYMENT METHOD</h5>
            <hr />

            <Row className='mt-3'>
                <Form.Group as={Col}>
                    <Form.Label>Enter card number *</Form.Label>
                    <Form.Control type='text' name='cardNumber' placeholder='1001200130014001' className='w-50' onChange={handleChange} />
                </Form.Group>

            </Row>

            <Row className='mt-3'>
                <Form.Group as={Col}>
                    <Form.Label>Valid Date *</Form.Label>
                    <Form.Select name="month" onChange={handleChange}>
                        <option value="">MM</option>
                        {Month?.map((item, key) => (
                            <option key={key}> {item?.value}</option>
                        ))}
                    </Form.Select>
                </Form.Group>
                <Form.Group as={Col}>
                    <Form.Label></Form.Label>
                    <Form.Select name="year" onChange={handleChange}>
                        <option value="">YYYY</option>
                        {Year?.map((item, index) => (
                            <option key={index}>{item?.value}</option>
                        ))}
                    </Form.Select>
                </Form.Group>
                <Form.Group as={Col}>
                    <Form.Label>CVV *</Form.Label>
                    <Form.Control type='text' name='cvv' onChange={handleChange} />
                </Form.Group>
            </Row>
            <button className='btn btn-dark btn-sm p-2 m-2' onClick={paymentSubmit}> Pay &#x0024;{props.totalPrice} </button>

        </React.Fragment>
    )
}

export default Payment
