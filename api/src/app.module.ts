import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CountryModule } from './country/country.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    CountryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
