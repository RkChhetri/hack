import React from 'react';
import './Places.css';
import p1 from './pictures/durbar.webp';
import p2 from './pictures/sangha.webp';
import p3 from './pictures/siddha.webp';

export default function Places() {
  const places = [
    {
      id: 1,
      image: p1,
      description:
        'Bhaktapur Durbar Square is a UNESCO World Heritage site located in the heart of Bhaktapur, Nepal. It is a historic plaza surrounded by impressive temples, palaces, and courtyards, showcasing exquisite Malla architecture.',
    },
    {
      id: 2,
      image: p2,
      description:
        'The Sangha Shiva Statue in Nepal is one of the tallest Shiva statues, offering a stunning representation of Hindu mythology. It attracts pilgrims and tourists alike, showcasing cultural and spiritual significance.',
    },
    {
      id: 3,
      image: p3,
      description:
        'Siddhapokhari is a historic pond located in Bhaktapur, Nepal. It is one of the oldest and largest ponds in the area, believed to have been constructed in the 12th century during the Malla period. The pond is surrounded by temples and shrines.',
    },
  ];

  return (
    <>
      <h2 className="head">PLACES TO VISIT</h2>
      <div className="container1">
        {places.map((place) => (
          <div className="box1" key={place.id}>
            <div
              className="photo"
              style={{ backgroundImage: `url(${place.image})` }}
            ></div>
            <div className="description">{place.description}</div>
          </div>
        ))}
      </div>
    </>
  );
}
