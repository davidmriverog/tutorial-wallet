export class WalletEntity {
  id: number;
  idUser: number;
  amount: number;
}

// postgres...
export const WALLETS_LIST = [
  {
    id: 1,
    idUser: 2,
    amount: 20,
  },
] as WalletEntity[];
