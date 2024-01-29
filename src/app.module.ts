import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FarfallinoController } from './farfallino/farfallino.controller';
import { FarfallinoService } from './farfallino/farfallino.service';
import { FarfallinoModule } from './farfallino/farfallino.module';

@Module({
  imports: [FarfallinoModule],
  controllers: [AppController, FarfallinoController],
  providers: [AppService, FarfallinoService],
})
export class AppModule {}
