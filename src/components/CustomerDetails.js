import React, { useState } from "react";
import { Row, Col, Card, Modal, Button, Form, Tab, Tabs, Table, Container } from 'react-bootstrap';
const CustomerDetails = () => {

    //  modal
    const [modal, setModal] = useState({ post: false, update: false });
    const handleClose = () => {
        setModal({ post: false, update: false });
    }

    // get data from address input
    const [formData, setFormData] = useState({
        billing: "", flat: "", street: "", city: "", country: "", zip: ""
    })
    const handleChange = (evt) => {
        setFormData({ ...formData, [evt.target.name]: evt.target.value })
    }

    // data store
    const [storeAddress, setStoreAddress] = useState([])

    // data submit
    const submit = () => {

        let data = {
            billing: formData.billing,
            flat: formData.flat,
            street: formData.street,
            city: formData.city,
            country: formData.country,
            zip: formData.zip,
            id: Math.random()
        }
        setStoreAddress([...storeAddress, data])
        setModal({ post: false });
        setFormData({ billing: "", flat: "", street: "", city: "", country: "", zip: "" })
    }

    // update 
    const update = () => {
        const rcds = storeAddress?.map((ele) => {
            if (ele.id === formData.id) {
                return {
                    ...ele,
                    billing: formData.billing,
                    flat: formData.flat,
                    street: formData.street,
                    city: formData.city,
                    country: formData.country,
                    zip: formData.zip,
                }
            }
            return ele
        })
        setStoreAddress(rcds)
        setModal({ post: false });
    }


    return (

        <React.Fragment>
            <h5 className="mt-3">Customer Details</h5>
            {/* list show Customer Details */}
            <table className="table">
                <tbody>
                    {storeAddress?.map((item, index) => (
                        <tr key={index}>
                            <td className="border"><b>{item?.billing === "0" ? "Billing Address" : "Shipping Address"}</b>, <br /> {item?.flat}, {item?.street}, {item?.city}, {item.country}, {item.zip}</td>
                            <td><button className="btn btn-primary btn-sm" onClick={() => { setFormData(item); setModal({ update: true }) }}> CHANGE </button></td>
                        </tr>
                    ))}

                </tbody>
            </table>
            <button className="btn btn-sm text-primary" variant="primary" onClick={() => { setModal({ post: true }); }}> + ADD NEW ADDRESS</button>
            {/* modal */}
            <Modal show={modal.post || modal.update} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{modal.post ? "ADD NEW ADDRESS" : "Update ADDRESS"}</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Row className='mt-3'>
                        <Form.Group as={Col}>
                            <Form.Label>Address Type</Form.Label>
                            <Form.Select name="billing" value={formData.billing} onChange={handleChange}>
                                <option value="">Select Address</option>
                                <option value="0">Billing Address</option>
                                <option value="1">Shipping Address</option>
                            </Form.Select>
                        </Form.Group>


                        <Form.Group as={Col}>
                            <Form.Label>Flat/Condo/House</Form.Label>
                            <Form.Control type='text' name="flat" value={formData.flat} onChange={handleChange} />
                        </Form.Group>

                    </Row>

                    <Row className='mt-3'>
                        <Form.Group as={Col}>
                            <Form.Label>Street Number/Name</Form.Label>
                            <Form.Control type='text' name="street" value={formData.street} onChange={handleChange} />
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>City</Form.Label>
                            <Form.Control type='text' name="city" value={formData.city} onChange={handleChange} />
                        </Form.Group>
                    </Row>
                    <Row className='mt-3'>
                        <Form.Group as={Col}>
                            <Form.Label>Country</Form.Label>
                            <Form.Select name="country" value={formData.country} onChange={handleChange}>
                                <option value="">Select Country</option>
                                <option value="India">India</option>
                                <option value="USA">USA</option>
                                <option value="London">London</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Zip Code</Form.Label>
                            <Form.Control type='number' name="zip" value={formData.zip} onChange={handleChange} />
                        </Form.Group>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={modal.post ? submit : update}>{modal.post ? "Save" : "Update"} </Button>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>

        </React.Fragment>
    )
}
export default CustomerDetails;