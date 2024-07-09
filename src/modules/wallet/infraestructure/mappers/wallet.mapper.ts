import { Injectable } from '@nestjs/common';
import { WalletEntity } from '../entities/wallet.entity';
import { WalletModel } from '../../domain/model/wallet.model';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class WalletMapper {
  convert(source: WalletEntity): WalletModel {
    return plainToInstance(WalletModel, {
      userId: source.idUser,
      walletId: source.id,
      balance: source.amount,
      ...source,
    } as WalletModel);
  }
}
