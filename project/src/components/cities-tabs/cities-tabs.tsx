import CityItem from '../city-item/city-item';

type CityTabsProps = {
  cities: string[];
  activeCity: string;
}

function CityTabs({cities, activeCity}: CityTabsProps): JSX.Element{
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cities.map((city) =>
            <CityItem key={city} cityName={city} isActive={city === activeCity}/>)}
        </ul>
      </section>
    </div>
  );
}

export default CityTabs;
