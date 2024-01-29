import { Injectable } from '@nestjs/common';
import { FarfallinoDto } from './dto/farfallino.dto';

@Injectable()
export class FarfallinoService {
    traduci(body: FarfallinoDto) {
        var parolaOriginale = body.text;
        var parolaTradotta = parolaOriginale.split('').map(l=>'aeiou'.includes(l)?`${l}f${l}`:l).join('')
        return {
            'status':200,
            'request':parolaOriginale,
            'translate':parolaTradotta,
        };
    }
}
