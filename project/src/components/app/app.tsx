import MainPage from '../../pages/main-page/main-page';


type AppOfferProps = {
  offersCount: number;
}


function App({offersCount}: AppOfferProps): JSX.Element{
  return (
    <MainPage offersCount={offersCount}/>
  );
}

export default App;
