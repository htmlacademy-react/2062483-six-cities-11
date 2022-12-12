import cn from 'classnames';
import {ChangeEvent, useState, FormEvent} from 'react';
import styles from './login-form.module.css';
import {useAppDispatch} from '../../hooks/index';
import {loginAction} from '../../store/api-actions';
import {useAppSelector} from '../../hooks';
import {getLoginError} from '../../store/authorization/selectors';

const formFields = {
  email: 'E-mail',
  password: 'Password',
};

type FieldProps = {
  value: string;
  error: boolean;
  errorText: string;
  regex: RegExp;
}

type FromStateProps = {
  [key: string]: FieldProps;
}

function LoginForm(): JSX.Element {
  const dispatch = useAppDispatch();

  const isLoading = useAppSelector(getLoginError);

  const [formState, setFormState] = useState<FromStateProps>({
    email: {
      value: '',
      error: false,
      errorText: 'Incorrect email!',
      regex: /^[\w\d%$:.-]+@\w+\.\w{2,5}$/,
    },
    password: {
      value: '',
      error: false,
      errorText: 'Incorrect password!',
      regex: /[a-zA-Z][0-9]|[0-9][a-zA-Z]/,
    }
  });

  const handleChange = ({target}: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = target;
    const rule = formState[name].regex;

    const isValid = rule.test(value);

    setFormState({
      ...formState,
      [name]: {
        ...formState[name],
        value,
        error: !isValid,
      }
    });
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    dispatch(loginAction({
      email: formState.email.value,
      password: formState.password.value
    }));
  };

  const isValidForm = Object.values(formState).reduce((checkValid, currentState) => {
    checkValid = Boolean(currentState.value) && !currentState.error;
    return checkValid;
  }, false);

  return(
    <form className="login__form form" action="#" method="post" onSubmit={handleSubmit}>
      {Object.entries(formFields).map(([name, label]) => {
        const inputClass = formState[name].error ? `${styles.loginForm__borderError}` : '';
        return (
          <div className="login__input-wrapper form__input-wrapper" key={name}>
            <label className="visually-hidden">{label}</label>
            <input
              className={cn('login__input', 'form__input', `${inputClass}`)}
              type={name}
              name={name}
              placeholder={label}
              value={formState[name].value}
              onChange={handleChange}
              required
            />
            <p className={`${styles.loginForm__messageError}`}>{formState[name].error && formState[name].errorText}</p>
          </div>
        );
      }
      )}
      <button
        className="login__submit form__submit button"
        type="submit"
        disabled={!isValidForm || isLoading}
      >
        {isLoading ? 'Loading...' : 'Sign in'}
      </button>
    </form>
  );
}

export default LoginForm;
