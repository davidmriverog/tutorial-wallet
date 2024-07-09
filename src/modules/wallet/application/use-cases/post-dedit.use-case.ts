import { Inject, Injectable } from '@nestjs/common';
import { WalletRepositoryPort } from '../../domain/ports/wallet.repository';
import { WalletMode } from '../../domain/enums/wallet-mode.enum';

@Injectable()
export class PostDebitUseCase {
  constructor(
    @Inject(WalletMode.EMILIO)
    private readonly walletRepositoryPort: WalletRepositoryPort,
  ) {
    //
  }

  async execute(walletId: number, amount: number): Promise<boolean> {
    const wallet = await this.walletRepositoryPort.debit(walletId, amount);

    if (!wallet) throw new Error('Error de wallet');

    return wallet;
  }
}
