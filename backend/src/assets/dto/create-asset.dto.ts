import { IsNotEmpty, IsNumber, IsPositive, IsString } from 'class-validator';
export class CreateAssetDto {
    @IsString()
    @IsNotEmpty()
    name: string;
    @IsString()
    @IsNotEmpty()
    type: string;
    @IsNumber()
    @IsNotEmpty()
    @IsPositive()
    value: number;
}
