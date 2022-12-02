import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { userSchema } from "../validations/userValidation";
import BlockTitle from './BlockTitle';
import "../styles/components/Contact.scss";

const Form = () => {

    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: "onChange",
        resolver: yupResolver(userSchema),
    });

    const submitForm = (data) => {
        console.log(data);
    }

    return (
        <>
            <BlockTitle title="Sign Up" />
            <form className='form' onSubmit={handleSubmit(submitForm)}>
                <input className={`form-input ${errors.fullName ? 'invalid' : ''}`} name="fullName" type="text" placeholder="Full name..." {...register("fullName")} />
                {errors.fullName && <small className='form-error'>{errors.fullName?.message}</small>}

                <input className={`form-input ${errors.email ? 'invalid' : ''}`} name="email" type="text" placeholder="Email..." {...register("email")} />
                {errors.email && <small className='form-error'>{errors.email?.message}</small>}

                <input className={`form-input ${errors.age ? 'invalid' : ''}`} name="age" type="number" placeholder="Age..." {...register("age")} />
                {errors.age && <small className='form-error'>{errors.age?.message}</small>}

                <input className={`form-input ${errors.password ? 'invalid' : ''}`} name="password" type="password" placeholder="Password..." {...register("password")} />
                {errors.password && <small className='form-error'>{errors.password?.message}</small>}

                <input className={`form-input ${errors.confirmpassword ? 'invalid' : ''}`} name="confirmpassword" type="password" placeholder="Confirm password..." {...register("confirmpassword")} />
                {errors.confirmpassword && <small className='form-error'>{errors.confirmpassword?.message}</small>}

                <input className={`form-submit ${Object.keys(errors).length !== 0 ? 'disabled' : ''}`} type="submit" value="Submit" />
            </form>
        </>
    );
}

export default Form;