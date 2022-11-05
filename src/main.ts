import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";


async function main(){
    const app = await NestFactory.create(AppModule);
    const port = process.env.PORT || 5050
    // app.use(logger);
    await app.listen(port);
    console.log(`server runnning at http://localhost:${port}`)
}
main()
