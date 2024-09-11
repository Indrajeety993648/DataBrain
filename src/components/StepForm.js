import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

const StepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  const validationSchema = [
    Yup.object().shape({
      name: Yup.string().required('Name is required'),
      email: Yup.string().email('Invalid email').required('Email is required'),
    }),
    Yup.object().shape({
      address: Yup.string().required('Address is required'),
      city: Yup.string().required('City is required'),
    }),
    Yup.object().shape({
      cardNumber: Yup.string().required('Card number is required'),
      expiryDate: Yup.string().required('Expiry date is required'),
    }),
  ];

  const handleSubmit = (values, { setSubmitting }) => {
    const updatedFormData = { ...formData, ...values };
    setFormData(updatedFormData);
    if (step < 3) {
      setStep(step + 1);
    } else {
      // Submit the form
      console.log('Form submitted:', updatedFormData);
      // Redirect to E-commerce page
      navigate('/ecommerce');
    }
    setSubmitting(false);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-3xl px-8 pt-6 pb-8 mb-4 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">Step Form</h1>
        <Formik
          initialValues={formData}
          validationSchema={validationSchema[step - 1]}
          onSubmit={handleSubmit}
          enableReinitialize
        >
          {({ isSubmitting }) => (
            <Form>
              {step === 1 && (
                <div>
                  <h2 className="text-xl font-semibold mb-4 text-center">Personal Details</h2>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                      Name
                    </label>
                    <Field name="name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                    <ErrorMessage name="name" component="div" className="text-red-500 text-xs italic text-center mt-1" />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                      Email
                    </label>
                    <Field name="email" type="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                    <ErrorMessage name="email" component="div" className="text-red-500 text-xs italic text-center mt-1" />
                  </div>
                </div>
              )}
              {step === 2 && (
                <div>
                  <h2 className="text-xl font-semibold mb-4 text-center">Address</h2>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
                      Address
                    </label>
                    <Field name="address" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                    <ErrorMessage name="address" component="div" className="text-red-500 text-xs italic text-center mt-1" />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="city">
                      City
                    </label>
                    <Field name="city" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                    <ErrorMessage name="city" component="div" className="text-red-500 text-xs italic text-center mt-1" />
                  </div>
                </div>
              )}
              {step === 3 && (
                <div>
                  <h2 className="text-xl font-semibold mb-4 text-center">Payment Details</h2>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cardNumber">
                      Card Number
                    </label>
                    <Field name="cardNumber" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                    <ErrorMessage name="cardNumber" component="div" className="text-red-500 text-xs italic text-center mt-1" />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="expiryDate">
                      Expiry Date
                    </label>
                    <Field name="expiryDate" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                    <ErrorMessage name="expiryDate" component="div" className="text-red-500 text-xs italic text-center mt-1" />
                  </div>
                </div>
              )}
              <div className="flex justify-between mt-6">
                {step > 1 && (
                  <button
                    type="button"
                    onClick={() => setStep(step - 1)}
                    className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  >
                    Previous
                  </button>
                )}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-auto"
                >
                  {step === 3 ? 'Submit' : 'Next'}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default StepForm;