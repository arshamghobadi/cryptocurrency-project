import React from 'react';
import { useFormik } from 'formik';
import {BasicSchema} from './schema/index'
import { Form, Container,Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';



const onSubmit = async (values, actions) => {
   
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm()
  
}

const Login = () => {
    const {values, handleSubmit, errors,isSubmitting, handleBlur, touched, handleChange, } = useFormik({
        initialValues: {
            email: "",
            password:"", 
        },
        validationSchema: BasicSchema,
        onSubmit,
    });

    
    return (
        <>
        <Container className="position-relative signupcontainer" >
            <Card className='signupcard d-flex w-50 position-absolute top-50 start-50 '>
                <Card.Title className='p-2 text-success'>
                    <h2>Login</h2>
                </Card.Title>
                <Form onSubmit={handleSubmit}>
                   <Form.Group className="mb-3 p-2" >
                    <Form.Label>Email address</Form.Label>
                    <Form.Control className={errors.email && touched.email ? "border-danger" : ""} value={values.email} id='email' onChange={handleChange} onBlur={handleBlur} type="email" placeholder="Enter email" />
                    {errors.name && touched.name && <p className='text-danger'>{errors.email}</p>}
                    </Form.Group>
                    <Form.Group className="mb-3 p-2" >
                    <Form.Label>Password</Form.Label>
                    <Form.Control className={ errors.password && touched.password ? "border-danger" : "" }  value={values.password} id='password' onChange={handleChange} onBlur={handleBlur} type="password" placeholder="Password" />
                    {errors.name && touched.name && <p className='text-danger'>{errors.password}</p>}
                    </Form.Group>
                    <div className='d-flex align-items-center p-2 justify-content-between'>
                        <Link className='text-decoration-none loginlinks' to={'/signup'}>SignUp page</Link>
                        <Link className='text-decoration-none loginlinks' to={'/'}>Home page</Link>
                        <Button disabled={isSubmitting} type='submit'>Login</Button>
                    </div>
                </Form>
            </Card>
        </Container>
        
        </>
    );
};

export default Login;