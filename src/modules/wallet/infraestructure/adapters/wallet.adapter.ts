import { Injectable } from '@nestjs/common';
import { WalletRepositoryPort } from '../../domain/ports/wallet.repository';
import { WalletModel } from '../../domain/model/wallet.model';
import { WalletMapper } from '../mappers/wallet.mapper';
import { WALLETS_LIST } from '../entities/wallet.entity';

@Injectable()
export class WalletAdapter implements WalletRepositoryPort {
  constructor(private readonly walletMapper: WalletMapper) {}

  async balance(walletId: any): Promise<WalletModel> {
    console.log(
      `se conecta a la wallet emilio y muestra el balance con el id ${walletId}`,
    );

    const findWallet = WALLETS_LIST.find((r) => r.id == walletId);

    return this.walletMapper.convert(findWallet);
  }

  async credit(walletId: any, amount: number): Promise<boolean> {
    console.log(
      `se conecta a la wallet emilio y acredita con el id ${walletId} monto ${amount}`,
    );

    return true;
  }

  async debit(walletId: any, amount: number): Promise<boolean> {
    console.log(
      `se conecta a la wallet emilio y debita con el id ${walletId} monto ${amount}`,
    );

    return true;
  }
}
