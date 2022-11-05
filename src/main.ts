import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";


async function main(){
    const app = await NestFactory.create(AppModule);
    // app.use(logger);
    await app.listen(3000);
    console.log(`server runnning at http://localhost:${3000}`)
}
main()
