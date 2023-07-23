import React, { useEffect, useState } from 'react'
import tShirt from "../../assets/tShirt.jpeg"
import shoe from "../../assets/shoe.jpeg"
import glass from "../../assets/glass.jpeg"
import { Card } from 'react-bootstrap';

function Order(props) {

    // props data Payment Component
    const { totalPrice } = props

    // data set according to product
    const [data, setData] = useState([
        { name: "Denum Pro Jacket", size: "XL", color: "Blue", image: tShirt, price: 10, qnt: 1, total: 10, id: 1 },
        { name: "Shoes", size: "M", color: "Gray", image: shoe, price: 20, qnt: 1, total: 20, id: 2 },
        { name: "Glasses", size: "M", color: "Gray", image: glass, price: 30, qnt: 1, total: 30, id: 3 },
    ])

    // data get quantity
    const [select, setSelect] = useState();

    // geting the id
    const [index, setIndex] = useState();

    // quantity Update
    let fun = () => {
        const rcds = data?.map((ele) => {

            if (ele?.id === index?.id) {
                return {
                    ...ele,
                    price: ele?.price,
                    qnt: select,
                    total: ele?.price * +select
                }
            }
            return ele
        })
        setData(rcds)

    }
    useEffect(() => {
        fun()
    }, [select, index])

    // deliveryCharge
    let deliveryCharge = data?.length > 0 ? 10 : 0;

    // total Amounts
    let totalPayment = 0;
    data.forEach((item) => {
        totalPayment = totalPayment + item?.total
    })

    // payment component props
    useEffect(() => {
        totalPrice(totalPayment + deliveryCharge)
    }, [totalPayment])

    //  product remove
    const removeData = (id) => {
        const removeItem = data?.filter((item) => item.id !== id)
        setData(removeItem)
    }

    return (
        <div>
            {/* Order Details */}
            <h5 className="mt-3">Your Order</h5>
            <hr />

            {data?.length > 0 && <table className='table'>
                <thead>
                    <tr>
                        <th>Images</th>
                        <th>Products Name</th>
                        <th>Size</th>
                        <th>Color</th>
                        <th>Amount</th>
                        <th>Quantity</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {data?.map((item, index) => (
                        <tr key={index}>
                            <td><img src={item.image} alt='product' width="40" /></td>
                            <td><b>{item.name}</b></td>
                            <td><b>{item.size}</b></td>
                            <td><b>{item.color}</b></td>
                            <td>&#x0024;{item.price * item.qnt}</td>

                            <td>
                                <select className='p-2' onChange={(e) => { setSelect(e.target.value); setIndex(item) }}>
                                    <option value={1}>1</option>
                                    <option value={2}>2</option>
                                    <option value={3}>3</option>
                                </select>
                            </td>
                            <td>
                                <button className="btn btn-sm text-primary" variant="primary" onClick={() => removeData(item?.id)}> remove </button>
                            </td>
                        </tr>

                    ))}
                </tbody>
            </table>}
            {/* Delivery Charges */}
            <Card style={{ width: '35rem' }}>
                <Card.Body>
                    <div className='row'>
                        <div className='col-6'>
                            <Card.Text>Delivery Charges</Card.Text>
                        </div>
                        <div className='col-2'>
                            <Card.Text><b>&#x0024;{deliveryCharge}</b></Card.Text>
                        </div>
                        <div className='col-4'>
                            <Card.Text>Express Delivery</Card.Text>
                        </div>

                        <div className='row'>
                            <div className='col-6'>
                                <Card.Text>Coupon Discount</Card.Text>
                            </div>
                            <div className='col-2'>
                                <Card.Text>&#x0024;<b>0</b></Card.Text>
                            </div>
                            <div className='col-4'>
                                <Card.Text>No coupon available</Card.Text>
                            </div>
                        </div>
                    </div>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem', marginTop: "5px" }}>
                <Card.Body>
                    <Card.Title>
                        <div className='row'>
                            <div className='col-8'>Total Payment</div>
                            <div className='col-4'>&#x0024;{totalPayment + deliveryCharge}</div>
                        </div>
                    </Card.Title>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Order
