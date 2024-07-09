import { IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

export class WalletDto {
  @IsNotEmpty()
  @IsNumber()
  walletId: number;

  @IsNotEmpty()
  userId: number;

  @IsNotEmpty()
  @IsNumber()
  amount: number;

  @IsOptional()
  category?: string;
}
