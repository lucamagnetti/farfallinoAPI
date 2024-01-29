import { Module } from '@nestjs/common';
import { FarfallinoController } from './farfallino.controller';
import { FarfallinoService } from './farfallino.service';

@Module({
    controllers: [FarfallinoController],
    providers: [FarfallinoService],
  })
  export class FarfallinoModule {}
