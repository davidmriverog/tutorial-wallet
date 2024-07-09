import { Provider } from '@nestjs/common';
import { GetBalanceUseCase } from '../../application/use-cases/get-balance.use-case';
import { PostCreditUseCase } from '../../application/use-cases/post-credit.use-case';
import { PostDebitUseCase } from '../../application/use-cases/post-dedit.use-case';

export const USE_CASES_PROVIDERS = [
  GetBalanceUseCase,
  PostCreditUseCase,
  PostDebitUseCase,
] as Provider[];
