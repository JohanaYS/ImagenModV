import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //**************************** Documentacion*/

  const config = new DocumentBuilder()
  .setTitle('Aplicacion de administracion de imagenes')
  .addBearerAuth({
    type:'http',
    scheme:'bearer',
    bearerFormat:'JWT',
    name:'JWT',
    description:'Enter JWT token',
    in:'header',
  },
  
  'JWT-auth', //Mismo nombre a usar en el controlador cuando usemos el decorador @ApiBeaarerAuth()!
  )  //seguridad en la documentación
  
  .setDescription('Auntenticación')
  .setVersion('1.0')
  .addTag('auth')
  .addTag('usuarios')
  .addTag('categorias')
  .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('documentacion', app, document, 
  {
    explorer: true,
    swaggerOptions: {
      filter: true,
      showRequestDuration:true,
    }
  }
  );
  app.useGlobalPipes(new ValidationPipe()); //para que la plicacion entera haga uso de los pipes, el pipes de validacion

  //**************************** */

  /** CORS SEGURIDAD*/
  app.enableCors({
    origin:['http://localhost:4200']
  });
  /****/
  await app.listen(3000);
}
bootstrap();
