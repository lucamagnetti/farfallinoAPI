import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { FarfallinoService } from './farfallino.service';
import { FarfallinoDto } from './dto/farfallino.dto';

@Controller('farfallino')
export class FarfallinoController {
    constructor(private readonly farfallinoService: FarfallinoService) {}

    @Get()
    traduci(@Query() farfallinoDto: FarfallinoDto) {
        return this.farfallinoService.traduci(farfallinoDto);
    }
}
