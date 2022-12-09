import {useMemo} from 'react';
import Layout from '../../components/layout/layout';
import {useAppDispatch} from '../../hooks/index';
import {Link} from 'react-router-dom';
import {AppRoute, CITIES} from '../../constants';
import {changeCurrentCity} from '../../store/user-actions/user-actions';
import {getRandomStringFromArray} from '../../utils';
import LoginForm from '../../components/login-form/login-form';

function LoginPage(): JSX.Element {
  const dispatch = useAppDispatch();

  const city = useMemo(() => getRandomStringFromArray(CITIES), []);

  return (
    <Layout className={['page--gray', 'page--login']}>

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <LoginForm />
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link
                className="locations__item-link"
                to={AppRoute.Main}
                onClick={() => {
                  dispatch(changeCurrentCity(city));
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
