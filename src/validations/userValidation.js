import * as yup from 'yup';

export const userSchema = yup.object().shape({
    fullName: yup.string("validation.string_invalid").required("validation.name_required"),
    email: yup.string("validation.string_invalid").email("validation.email_error_invalid").required("validation.email_error_required"),
    age: yup.number("validation.number_invalid").positive("validation.number_invalid_negative").integer("validation.number_integer").transform(value => {
        return Number.isNaN(value) ? 0 : value
    }),
    password: yup.string("validation.string_invalid").min(4, "validation.password_at_least").max(20, "validation.password_max").required("Password is required"),
    confirmpassword: yup.string("validation.string_invalid").min(4, "validation.password_at_least").max(20, "validation.password_max").required("validation.password_required").oneOf([yup.ref("password"), null], "validation.passwords_invalid_match")
});