require('dotenv').config();
require('./config/database');

const Trail = require('./models/trail');

(async function() {
  await Trail.deleteMany({});
  const trails = await Trail.create([
    {name: 'Boulder Creek Path', location: 'Boulder', difficulty: 'easy', length: 5.5, description: 'The Boulder Creek Path is a 5.5 mile trail that runs from Boulder Canyon west to the city limits. The path is paved and is popular for walking, running, and cycling. The path is also wheelchair accessible.', comments: [], user: '5e8e1c9d1c9d440000a2b0a0'},
    {name: 'Walker Ranch Loop', location: 'Boulder', difficulty: 'hard', length: 7.6, description: 'Walker Ranch Loop is a 7.6 mile heavily trafficked loop trail located near Boulder, Colorado that features a river and is rated as difficult. The trail offers a number of activity options and is best used from April until October.', comments: [], user: '5e8e1c9d1c9d440000a2b0a0'},
    {name: 'Mount Sanitas Loop', location: 'Boulder', difficulty: 'hard', length: 3.3, description: 'Mount Sanitas Loop is a 3.3 mile heavily trafficked loop trail located near Boulder, Colorado that features beautiful wild flowers and is rated as difficult. The trail is primarily used for hiking, running, nature trips, and bird watching and is best used from March until October.', comments: [], user: '5e8e1c9d1c9d440000a2b0a0'},
    {name: 'Royal Arch Trail', location: 'Boulder', difficulty: 'hard', length: 3.4, description: 'Royal Arch Trail is a 3.4 mile heavily trafficked out and back trail located near Boulder, Colorado that features beautiful wild flowers and is rated as difficult. The trail is primarily used for hiking, running, nature trips, and bird watching and is best used from April until October.', comments: [], user: '5e8e1c9d1c9d440000a2b0a0'},
    {name: 'Green Mountain West Trail', location: 'Boulder', difficulty: 'moderate', length: 2.9, description: 'Green Mountain West Trail is a 2.9 mile heavily trafficked loop trail located near Boulder, Colorado that features beautiful wild flowers and is rated as moderate. The trail is primarily used for hiking, running, nature trips, and bird watching and is best used from April until October.', comments: [], user: '5e8e1c9d1c9d440000a2b0a0'},
    {name: 'Flagstaff Mountain Trail', location: 'Boulder', difficulty: 'moderate', length: 3.4, description: 'Flagstaff Mountain Trail is a 3.4 mile heavily trafficked out and back trail located near Boulder, Colorado that features beautiful wild flowers and is rated as moderate. The trail is primarily used for hiking, running, nature trips, and bird watching and is best used from April until October.', comments: [], user: '5e8e1c9d1c9d440000a2b0a0'},
    {name: 'Bear Peak', location: 'Boulder', difficulty: 'hard', length: 7.2, description: 'Bear Peak is a 7.2 mile heavily trafficked out and back trail located near Boulder, Colorado that features beautiful wild flowers and is rated as difficult. The trail is primarily used for hiking, running, nature trips, and bird watching and is best used from March until October.', comments: [], user: '5e8e1c9d1c9d440000a2b0a0'},
    {name: 'Chautauqua Trail', location: 'Boulder', difficulty: 'moderate', length: 1.1, description: 'Chautauqua Trail is a 1.1 mile heavily trafficked out and back trail located near Boulder, Colorado that features beautiful wild flowers and is rated as moderate. The trail is primarily used for hiking, walking, nature trips, and bird watching and is best used from April until October.', comments: [], user: '5e8e1c9d1c9d440000a2b0a0'},
  ]);

  console.log(trails);

  process.exit();

  })();