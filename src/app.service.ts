import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'FarfallinoAPI ti da il benvenuto, inizia subito facendo una chiamata GET a /farfallino?text=[STRING]';
  }
}
