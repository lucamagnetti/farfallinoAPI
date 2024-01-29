import { IsNotEmpty, IsString } from "class-validator";

export class FarfallinoDto {
    @IsNotEmpty({ message: 'Il campo non può essere vuoto' })
    @IsString({ message: 'Inserisci una parola in formato stringa' })
    text: string;
}
