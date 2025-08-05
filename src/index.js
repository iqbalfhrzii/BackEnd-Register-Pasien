import express from 'express';
import dotenv from 'dotenv';
import dokterRoutes from './routes/dokterRoutes.js';
import poliDokterRoutes from './routes/poliDokterRoutes.js';
import polisRoutes from './routes/poliRoutes.js';
import registrationRoutes from './routes/registrationRoutes.js';
import usersRoutes from './routes/userRoutes.js';

dotenv.config();
const app = express();
app.use(express.json());

app.get('/', (req, res) => res.send('API berjalan'));

app.use('/dokters', dokterRoutes);
app.use('/poli-dokter', poliDokterRoutes);
app.use('/polis', polisRoutes);
app.use('/registrations', registrationRoutes);
app.use('/users', usersRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server berjalan di http://localhost:${PORT}`));
