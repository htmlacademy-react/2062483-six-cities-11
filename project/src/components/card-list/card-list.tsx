import Card from '../card/card';
import { Offer } from '../../types/offers-type';
import {CardListClassName} from '../../constants';

type CardListProps = {
  offers: Offer[];
  cardListType: 'cities' | 'near';
  onCardMouseEnter?: (offerId: number | null) => void;
}

function CardsList({offers, cardListType, onCardMouseEnter}: CardListProps): JSX.Element {
  return (
    <div className={`${CardListClassName[cardListType]} places__list`}>
      {offers.map((offer) => (
        <Card
          offer={offer}
          cardType={cardListType}
          key={offer.id}
          onCardMouseEnter={onCardMouseEnter}
        />
      ))}
    </div>);
}

export default CardsList;
