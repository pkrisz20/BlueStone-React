import * as yup from 'yup';

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

export const contactSchema = yup.object().shape({
    fullname: yup.string().required("This field is required").max(50, "This field should be at most 50 characters"),
    company: yup.string().required("This field is required").max(50, "This field should be at most 50 characters"),
    email: yup.string().email("Invalid email address").required("This field is required"),
    phone: yup.string().required("This field is required").matches(phoneRegExp, "Invalid phone number"),
    country: yup.string().required("Has to select at least one"),
    services: yup.string().required("This field is required").max(50, "This field should be at most 50 characters"),
    description: yup.string().required("This field is required").max(500, "This field should be at most 500 characters"),
});
