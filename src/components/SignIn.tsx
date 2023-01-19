import { Formik, Field, Form, ErrorMessage } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup'
import { useAuth } from '../contexts/auth';

export function SignIn() {  
  const { login, signed, user, } = useAuth()
  const navigate = useNavigate()
  
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
      setTimeout(async () => {
        const { email, password } = values
        await login(email, password)

        if(signed) {
          if(user?.role == 'admin') {
            navigate('admin')
          } else {
            navigate('home')
          }
        }
        
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
