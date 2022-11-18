import {Link} from 'react-router-dom';
import {AppRoute} from '../../constants';
import styles from './not-found.module.css';
import Layout from '../../components/layout/layout';
import Footer from '../../components/footer/footer';

function NotFoundPage(): JSX.Element {
  return (
    <Layout className={[]}>

      <section className={styles.section}>
        <h1 className={styles.title}>404. Page not found</h1>
        <Link to={`${AppRoute.Main}`}>Вернуться на главную</Link>
      </section>
      <Footer />

    </Layout>
  );
}

export default NotFoundPage;
