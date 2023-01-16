import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup'

export function SignIn() {  
  return (
    <Formik
    initialValues={{
      email: '',
      password: '',
    }}
    validationSchema={Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string().required('Required')
    })}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2))
        setSubmitting(false)
      }, 400)
    }}
    >
      <Form className="w-full bg-white p-6 shadow-md">
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

        <div className="text-center">
          <button className="bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600" type="submit">Submit</button>
        </div>
      </Form>
    </Formik>
  );
};
