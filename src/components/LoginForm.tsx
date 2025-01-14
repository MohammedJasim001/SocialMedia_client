'use client';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { useRouter } from 'next/navigation';
import * as Yup from 'yup';

interface LoginFormValues {
  email: string;
  password: string;
}

const validationSchema = Yup.object({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .min(4, 'Password must be at least 4 characters')
    .required('Password is required'),
});

const LoginForm: React.FC = () => {
  const router = useRouter();
  const initialValues: LoginFormValues = {
    email: '',
    password: '',
  };

  const handleSubmit = (values: LoginFormValues) => {
    console.log(values);
  };

  return (
    <div>
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold text-white text-center mb-6">
          Welcome Back!
        </h1>
        <p className="text-gray-400 text-sm text-center mb-8">
          Please log in to your account to continue.
        </p>
        </div>
        <div className="w-full max-w-sm mx-auto">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form className="space-y-4">
              {/* Email Input */}
              <div>
                <label className="text-white mb-2">Email</label>
                <Field
                  type="email"
                  name="email"
                  className="w-full p-2 rounded-md bg-[#1a1c26] text-sm text-gray-400 h-10"
                  placeholder="Enter your email"
                />
                <div className="text-red-500 text-sm mt-1">
                  <ErrorMessage name="email" />
                </div>
              </div>

              {/* Password Input */}
              <div>
                <label className=" text-white mb-2">Password</label>
                <Field
                  type="password"
                  name="password"
                  className="w-full p-2 rounded-md bg-[#1a1c26] text-sm text-gray-400 h-10"
                  placeholder="Enter your password"
                />
                <div className="text-red-500 text-sm mt-1">
                  <ErrorMessage name="password" />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full p-2 bg-[#6a3aba] text-white rounded-md"
              >
                Login
              </button>

              {/* Google Login Button */}
              <div className="mt-4">
                <button
                  className="w-full flex items-center justify-center p-2 border border-gray-300 rounded-md bg-white hover:bg-gray-100 transition-all"
                >
                  <img
                    src="/images/googleLogo.png"
                    alt="Google Logo"
                    className="w-8 h-5 mr-2"
                  />
                  <span className="text-sm font-medium text-gray-600">
                    Login with Google
                  </span>
                </button>
              </div>

              {/* Optional Link */}
              <p className="text-center text-sm text-gray-400 mt-4">
                Don't have an account?{' '}
                <a
                  href="/auth/registration"
                  className="text-blue-500 hover:underline"
                >
                  Sign up
                </a>
              </p>
            </Form>
          )}
        </Formik>
        </div>
      </div>
  );
};

export default LoginForm;
