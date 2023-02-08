import * as yup from "yup"
export const BasicSchema = yup.object().shape({
    name: yup
    .string()
    .matches(/^[A-Za-z]*$/, 'Please enter valid name')
    .max(40)
    .required(),
    email: yup.string().email("plase enter a valid email").required("reqired"),
    password: yup
    .string()
    .required('Please Enter your password')
    .matches(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z]).{8,}$",
      "Must Contain 8 Characters, two Uppercase, three Lowercase, One Number, one special case Character and two digit "
    ),
  confirmPassword: yup
    .string()
    .required()
    .oneOf([yup.ref("password"), null], "Passwords must match")
})