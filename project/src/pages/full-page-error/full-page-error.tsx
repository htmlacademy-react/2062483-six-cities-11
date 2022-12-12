import styles from './full-page-error.module.css';
import {MouseEvent} from 'react';
import {useAppDispatch} from '../../hooks';
import {fetchOffers} from '../../store/api-actions';

function FullPageError(): JSX.Element {
  const dispatch = useAppDispatch();

  const handleClick = (evt: MouseEvent) => {
    evt.preventDefault();
    dispatch(fetchOffers());
  };

  return (
    <section className={styles.section}>
      <p className={styles.title}>Something went wrong, please try again</p>
      <button
        className={styles.rebootBtn}
        onClick={handleClick}
      >
        <span className={styles.btnText}>Try again</span>
      </button>
    </section>
  );
}

export default FullPageError;
