import { Provider } from '@nestjs/common';
import { WalletAdapter } from '../adapters/wallet.adapter';

import { Wallet2Adapter } from '../adapters/wallet-v2.adapter';
import { WalletMode } from '../../domain/enums/wallet-mode.enum';

export const ADAPTER_PROVIDERS = [
  {
    provide: WalletMode.EMILIO,
    useClass: WalletAdapter,
  },
  {
    provide: WalletMode.ORLANDO,
    useClass: Wallet2Adapter,
  },
] as Provider[];
