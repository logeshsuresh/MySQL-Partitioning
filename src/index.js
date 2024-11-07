const express = require('express');

const env = require('./config/env');
const sequelize = require('./config/db');
const studentRouter = require('./routes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1', studentRouter);

app.listen(env.PORT, async () => {
    try {
        await sequelize.authenticate();

        await sequelize.sync({ force: false });

        console.log(`Server running on PORT ${env.PORT}`);
    } catch (error) {
        process.exit(1);
    }
});
