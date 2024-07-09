import { WalletModel } from '../model/wallet.model';

export interface WalletRepositoryPort {
  balance(walletId): Promise<WalletModel>;
  credit(walletId, amount: number): Promise<boolean>;
  debit(walletId, amount: number): Promise<boolean>;
}

export const WalletRepositoryPort = Symbol('WalletRepositoryPort');
