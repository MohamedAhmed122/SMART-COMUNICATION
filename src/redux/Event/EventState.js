
 const dashboardEvents = [
    {
      id: '1',
      title: 'Trip to The Red Square in Moscow',
      date: '2020-07-21',
      category: 'culture',
      description: 'after the pandemic situation we decided to make the best Trip for you join us to trip to the Red Square in Moscow.',
      city: "Moscow, Russia",
      venue: "THE RED SQUARE, Sivtsev Vrazhek Pereulok, Moscow, Russia",
      venueLatLng: {
        lat: 55.747325,
        lng: 37.593772
      },
      hostedBy: 'Bob',
      hostPhotoURL: 'https://randomuser.me/api/portraits/men/20.jpg',
      attendees: [
        {
          id: 'a',
          name: 'Bob',
          photoURL: 'https://randomuser.me/api/portraits/men/20.jpg'
        },
        {
          id: 'b',
          name: 'Tom',
          photoURL: 'https://randomuser.me/api/portraits/men/22.jpg'
        }
      ]
    },
    {
      id: '2',
      title: 'Trip to Punch and Judy Pub',
      date: '2018-03-18',
      category: 'drinks',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
      city: 'London, UK',
      venue: 'Punch & Judy, Henrietta Street, London, UK',
      venueLatLng: {
        lat: 51.5118074,
        lng: -0.12300089999996544
      },
      hostedBy: 'Tom',
      hostPhotoURL: 'https://randomuser.me/api/portraits/men/22.jpg',
      attendees: [
        {
          id: 'a',
          name: 'Bob',
          photoURL: 'https://randomuser.me/api/portraits/men/20.jpg'
        },
        {
          id: 'b',
          name: 'Tom',
          photoURL: 'https://randomuser.me/api/portraits/men/22.jpg'
        }
      ]
    }
  ];

 export default dashboardEvents;