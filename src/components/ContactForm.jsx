import { userSchema } from "../validations/userValidation";

const ContactForm = () => {

    const createUser = async (event) => {
        event.preventDefault();
        let formData = {
            name: event.target[0].value,
            email: event.target[1].value,
            password: event.target[2].value,
            confirmpassword: event.target[3].value,
            age: event.target[4].value,
        }
        const isValid = await userSchema.isValid(formData);
    }

    return (
        <form onSubmit={createUser}>
            <input type="text" placeholder="Name..." />
            <input type="email" placeholder="Email..." />
            <input type="password" placeholder="Password..." />
            <input type="password" placeholder="Confirm password..." />
            <input type="number" placeholder="Age..." />
            <input type="submit" />
        </form>
    );
}

export default ContactForm
