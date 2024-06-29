import GalleryCard from '../GalleryCard/GalleryCard';
import './GalleryList.css';

const cards = [
  {
    id: 1,
    cardStyle: 'card-1',
    transport: 'НА АВТОБУСЕ',
    peopleInTrip: 10,
    city: 'Тбилиси',
    month: 'апрель',
    peopleInCity: '83.000',
  },
  {
    id: 2,
    cardStyle: 'card-2',
    transport: 'НА САМОЛЕТЕ',
    city: 'Стамбул',
    month: 'март',
    peopleInCity: '110.000',
  },
  {
    id: 3,
    cardStyle: 'card-3',
    transport: 'НА САМОЛЕТЕ',
    peopleInTrip: 15,
    city: 'Дубай',
    month: 'июнь',
    peopleInCity: '220.000',
  },
  {
    id: 4,
    cardStyle: 'card-4',
    transport: 'САМОЛЕТ + ПАРОМ',
    peopleInTrip: 11,
    city: 'Пхукет',
    month: 'сентябрь',
    peopleInCity: '135.000',
  },
];

export default function GalleryList() {
  return (
    <ul className='list-card'>
      {cards.map((card) => (
        <li key={card.id}>
          <GalleryCard
            cardStyle={card.cardStyle}
            transport={card.transport}
            peopleInTrip={card.peopleInTrip}
            city={card.city}
            month={card.month}
            peopleInCity={card.peopleInCity}
          />
        </li>
      ))}
    </ul>
  );
}
