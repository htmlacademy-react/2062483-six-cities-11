import { useState } from 'react';
import Card from '../card/card';
import { Offer } from '../../types/offers-type';
import {CardListClassName} from '../../constants';

type CardListProps = {
  offers: Offer[];
  cardListType: 'cities' | 'near';
}

function CardsList({offers, cardListType}: CardListProps): JSX.Element {

  const [, setActiveCard] = useState<number | null>(null);

  const handleMouseEnterOnCard = (offerId : number | null) => setActiveCard(offerId);

  return (
    <div className={`${CardListClassName[cardListType]} places__list`}>
      {offers.map((offer) => (
        <Card
          offer={offer}
          cardType={cardListType}
          key={offer.id}
          onCardMouseEnter={handleMouseEnterOnCard}
        />
      ))}
    </div>);
}

export default CardsList;
