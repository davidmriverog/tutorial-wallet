import { Inject, Injectable } from '@nestjs/common';
import { WalletModel } from '../../domain/model/wallet.model';
import { WalletRepositoryPort } from '../../domain/ports/wallet.repository';
import { WalletMode } from '../../domain/enums/wallet-mode.enum';

@Injectable()
export class GetBalanceUseCase {
  constructor(
    @Inject(WalletMode.EMILIO)
    private readonly walletRepositoryPort: WalletRepositoryPort,
  ) {
    //
  }

  async execute(walletId: number): Promise<WalletModel> {
    const wallet = await this.walletRepositoryPort.balance(walletId);

    if (!wallet) throw new Error('Error de wallet');

    return wallet;
  }
}
