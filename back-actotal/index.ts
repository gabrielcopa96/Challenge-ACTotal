import app from "./src/app";
import "dotenv/config";
import { sequelize } from "./src/config/config-database";
import "./src/models/Persons";

app.listen(process.env.PORT || 3002, async () => {
    try {

        await sequelize.sync({ force: false });
        console.log('Database connected');
        console.log(`Server is running on port ${process.env.PORT}`);

    } catch (error) {

        console.error('Unable to connect to the database', error);

    }
});