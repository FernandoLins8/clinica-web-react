import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup'

export function SignUp() {  
  return (
    <Formik
    initialValues={{
      name: '',
      email: '',
      password: '',
      passwordConfirmation: ''
    }}
    validationSchema={Yup.object({
      name: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string().required('Required'),
      passwordConfirmation: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Required'),
    })}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2))
        setSubmitting(false)
      }, 400)
    }}
    >
      <Form className="bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="name">Name</label>
          <Field className="border border-gray-400 p-2 rounded-lg w-full" name="name" type="text" />
          <ErrorMessage name="name" />
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="email">Email</label>
          <Field className="border border-gray-400 p-2 rounded-lg w-full" name="email" type="text" />
          <ErrorMessage name="email" />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="password">Password</label>
          <Field className="border border-gray-400 p-2 rounded-lg w-full" name="password" type="password" />
          <ErrorMessage name="password" />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="passwordConfirmation">Password Confirmation</label>
          <Field className="border border-gray-400 p-2 rounded-lg w-full" name="passwordConfirmation" type="password" />
          <ErrorMessage name="passwordConfirmation" />
        </div>

        <div className="text-center">
          <button className="bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600" type="submit">Submit</button>
        </div>
      </Form>
    </Formik>
  );
};
