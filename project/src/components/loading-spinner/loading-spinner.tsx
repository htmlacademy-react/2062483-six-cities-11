
import {Circles} from 'react-loader-spinner';

function LoadingSpinner(): JSX.Element {
  return (
    <Circles
      height='80'
      width='80'
      color='#4481c3'
      ariaLabel="circles-loading"
      wrapperStyle={{
        width: '100vw',
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    />
  );
}

export default LoadingSpinner;
