import Routes from "../routes/Routes";
import Hapi from '@hapi/hapi';
import dotenv from "dotenv";
import ServiceMongo from "../service/ServiceMongo";

class Server {
    private serviceMongo: ServiceMongo = new ServiceMongo();

    constructor() {
        dotenv.config();
    }

    public async init() {
        const server = Hapi.server({
            port: process.env.PORT,
            host: process.env.HOST
        });

        await this.serviceMongo.createMongoConnection();
        server.route(new Routes().getPurchaseRoutes("purchases"));

        await server.start();
        return server.info;
    }
}

new Server().init().then((info) => {
    console.log('Server running on %s', info.uri);
});