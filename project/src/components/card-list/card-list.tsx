import { useState } from 'react';
import Card from '../card/card';
import { Offer } from '../../types/offers-type';

type CardListProps = {
  offers: Offer[];
}

function CardsList({offers}: CardListProps): JSX.Element {
  const [, setActiveCard] = useState<number | null>(null);

  const handleMouseEnterOnCard = (offerId : number | null) => setActiveCard(offerId);

  return (
    <div className="cities__places-list">
      {offers.map((offer) => (
        <Card
          offer={offer}
          cardType={'cities'}
          key={offer.id}
          onCardMouseEnter={handleMouseEnterOnCard}
        />
      ))}
    </div>);
}

export default CardsList;
