import { Body, Controller, Get, Post, Query } from '@nestjs/common';

import { GetBalanceUseCase } from '../../application/use-cases/get-balance.use-case';
import { WalletDto } from '../dto/wallet.dto';
import { PostDebitUseCase } from '../../application/use-cases/post-dedit.use-case';
import { PostCreditUseCase } from '../../application/use-cases/post-credit.use-case';

@Controller('wallets')
export class WalletController {
  constructor(
    private readonly getBalanceUseCase: GetBalanceUseCase,
    private readonly postDebitUseCase: PostDebitUseCase,
    private readonly postCreditUseCase: PostCreditUseCase,
  ) {}

  @Get('/balance')
  async getBalance(@Query('walletId') walletId: number) {
    return await this.getBalanceUseCase.execute(walletId);
  }

  @Post('/debit')
  async debit(@Body() walletDto: WalletDto) {
    return await this.postDebitUseCase.execute(
      walletDto.walletId,
      walletDto.amount,
    );
  }

  @Post('/credit')
  async credit(@Body() walletDto: WalletDto) {
    return await this.postCreditUseCase.execute(
      walletDto.walletId,
      walletDto.amount,
    );
  }
}
