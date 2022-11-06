import { NestFactory } from "@nestjs/core";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { AppModule } from "./app.module";

async function main() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 5050;
  // app.use(logger);
  const config = new DocumentBuilder()
    .setTitle("Satish's server")
    .setDescription("Just a dummy server while using prisma and nest.")
    .setVersion("1.0.1")
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("docs", app, document);
  await app.listen(port);
  console.log(`server runnning at http://localhost:${port}`);
}
main();
