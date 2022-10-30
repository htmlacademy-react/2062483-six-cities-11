import styles from './not-found-page.module.css';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';

function NotFoundPage(): JSX.Element {
  return (
    <div className="page">
      <Header />

      <section className={styles.section}>
        <h1 className={styles.h1}>404. Page not found</h1>
        <a href="/">Вернуться на главную</a>
      </section>

      <Footer />
    </div>
  );
}

export default NotFoundPage;
