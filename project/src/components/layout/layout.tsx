import {ReactNode} from 'react';
import cn from 'classnames';
import Header from '../../components/header/header';

type LayoutProps = {
  children: ReactNode;
  className: string[];
}

function Layout({children, className}: LayoutProps): JSX.Element {
  return(
    <div className={cn('page', className)}>
      <Header />
      {children}
    </div>
  );
}

export default Layout;
