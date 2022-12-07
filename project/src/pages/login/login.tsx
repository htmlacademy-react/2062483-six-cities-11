import {ChangeEvent, useState, FormEvent} from 'react';
import Layout from '../../components/layout/layout';
import cn from 'classnames';
import styles from './login.module.css';
import {useAppDispatch} from '../../hooks/index';
import {loginAction} from '../../store/api-actions';
import {useAppSelector} from '../../hooks';
import {Link, useNavigate} from 'react-router-dom';
import {AppRoute, CITIES} from '../../constants';
import {setCurrentCity} from '../../store/action';
import {getRandomStringFromArray} from '../../utils';

const city = getRandomStringFromArray(CITIES);

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

function LoginPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const isLoading = useAppSelector((state) => state.loginError);

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
      regex: /(.{3,})/i,
    }
  });

  const handleChange = ({target}: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = target;
    const rule = formState[name].regex;

    const isValid = rule.test(value);

    isValid ? formState[name].error = false : formState[name].error = true;

    setFormState({
      ...formState,
      [name]: {
        value: value,
        error: formState[name].error,
        errorText: formState[name].errorText,
        regex: rule,
      }
    });
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    dispatch(loginAction({
      email: formState.email.value,
      password: formState.password.value
    }));
    navigate(AppRoute.Main);
  };

  const isValidForm = Object.values(formState).reduce((checkValid, currentState) => {
    checkValid = Boolean(currentState.value) && !currentState.error;
    return checkValid;
  }, false);

  return (
    <Layout className={['page--gray', 'page--login']}>

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
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
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link
                className="locations__item-link"
                to={AppRoute.Main}
                onClick={() => {
                  dispatch(setCurrentCity(city));
                }}
              >
                <span>{city}</span>
              </Link>
            </div>
          </section>
        </div>
      </main>

    </Layout>
  );
}

export default LoginPage;
