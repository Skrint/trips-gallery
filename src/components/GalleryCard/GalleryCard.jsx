/* eslint-disable react/prop-types */
import './GalleryCard.css';

export default function GalleryCard(props) {
  return (
    <div className={`${props.cardStyle} card`}>
      <div className='info'>
        <span className='span'>{props.transport}</span>
        {props.peopleInTrip && (
          <span className='span'>{props.peopleInTrip}</span>
        )}
      </div>
      <p className='trip-info'>
        {props.city}, {props.month} - {props.peopleInCity}
      </p>
    </div>
  );
}
