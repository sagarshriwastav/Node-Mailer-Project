import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react'
import Alert from 'react-bootstrap/Alert';


const Home = () => {

    const [email, setEmail] = useState("");
    const [show, setShow] = useState(false)

    const sendEmail = async (e) => {
        e.preventDefault();

        const res = await fetch("/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }, body: JSON.stringify({
                email
            })
        })
        const data = await res.json();

        if (data.status === 401 || !data) {
            console.log("error");
        } else {
            console.log("Email sent");
            setShow(true)
            setEmail("")
        }
    }

    return (
        <>
        {
            show ? <Alert variant="primary" onClose={() => setShow(false)} dismissible>Email Sent Successfully</Alert>:""
        }
            <div className="container mt-2">
                <div className='d-flex justify-content-center'>
                    <h2>Send email using nodejs</h2>
                    <img src="/gmail2.png" alt="gmail_img" className='
                mx-3' style={{ width: "80px" }} srcset="" />
                </div>
                <div className='d-flex justify-content-center'>
                    <Form className='mt-2 col-lg-6'>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Enter Your Email </Form.Label>
                            <Form.Control name="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" />

                        </Form.Group>

                        <Button variant="primary" type="submit" onClick={sendEmail}>
                            Send
                        </Button>
                    </Form>
                </div>
            </div>
        </>
    )
}

export default Home