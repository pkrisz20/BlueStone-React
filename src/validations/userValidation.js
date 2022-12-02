import * as yup from 'yup';

export const userSchema = yup.object().shape({
    fullName: yup.string().required("Name is required"),
    email: yup.string().email("Must be a valid email").required("Email is required"),
    age: yup.number("Must be a number").positive("Must be greater than zero").integer("Must be an integer").transform(value => {
        return Number.isNaN(value) ? 0 : value
    }),
    password: yup.string().min(4, "Password must be at least 4 characters").max(20, "Password must be at most 20 characters").required("Password is required"),
    confirmpassword: yup.string().min(4, "Password must be at least 4 characters").max(20, "Password must be at most 20 characters").required("Password is required").oneOf([yup.ref("password"), null], "Passwords don't match")
});