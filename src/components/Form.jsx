import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { userSchema } from "../validations/userValidation";
import BlockTitle from './BlockTitle';
import "../styles/components/Contact.scss";
import { useTranslation } from 'react-multi-lang';

const Form = () => {
    const trans = useTranslation();
    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: "onChange",
        resolver: yupResolver(userSchema),
    });

    const submitForm = (data) => {
        console.log(data);
    }

    return (
        <>
            <BlockTitle title={trans('users.sign_up')} />
            <form className='form' onSubmit={handleSubmit(submitForm)}>
                <input className={`form-input ${errors.fullName ? 'invalid' : ''}`} name="fullName" type="text" placeholder={trans('users.fullname')} {...register("fullName")} />
                {errors.fullName && <small className='form-error'>{trans(errors.fullName?.message)}</small>}

                <input className={`form-input ${errors.email ? 'invalid' : ''}`} name="email" type="text" placeholder={trans('users.email')} {...register("email")} />
                {errors.email && <small className='form-error'>{trans(errors.email?.message)}</small>}

                <input className={`form-input ${errors.age ? 'invalid' : ''}`} name="age" type="number" placeholder={trans('users.age')} {...register("age")} />
                {errors.age && <small className='form-error'>{trans(errors.age?.message)}</small>}

                <input className={`form-input ${errors.password ? 'invalid' : ''}`} name="password" type="password" placeholder={trans('users.password')} {...register("password")} />
                {errors.password && <small className='form-error'>{trans(errors.password?.message)}</small>}

                <input className={`form-input ${errors.confirmpassword ? 'invalid' : ''}`} name="confirmpassword" type="password" placeholder={trans('users.confirm')} {...register("confirmpassword")} />
                {errors.confirmpassword && <small className='form-error'>{trans(errors.confirmpassword?.message)}</small>}

                <input className={`form-submit ${Object.keys(errors).length !== 0 ? 'disabled' : ''}`} type="submit" value="Submit" />
            </form>
        </>
    );
}

export default Form;