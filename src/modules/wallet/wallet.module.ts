import { Module } from '@nestjs/common';

import { WalletController } from './infraestructure/controllers/wallet.controller';

import { ADAPTER_PROVIDERS } from './infraestructure/providers/adapter.provider';
import { USE_CASES_PROVIDERS } from './infraestructure/providers/use-cases.provider';
import { WalletMapper } from './infraestructure/mappers/wallet.mapper';

@Module({
  imports: [],
  controllers: [WalletController],
  providers: [...ADAPTER_PROVIDERS, ...USE_CASES_PROVIDERS, WalletMapper],
})
export class WalletModule {}
