import aknandan from '../controllers/aknandan.js'
import locations from '../controllers/locations.js'


const AllRoutes = (app) => {
    app.use('/api/aknandan', aknandan);
    app.use('/api/locations', locations);
};

export default AllRoutes;