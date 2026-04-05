import express from 'express';
import AllRoutes from './routes/route.js';

const app = express();
const PORT = process.env.PORT ?? 8000;

AllRoutes(app);




app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
})

