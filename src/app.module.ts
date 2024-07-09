import { Module } from '@nestjs/common';
import { MAIN_MODULES } from './modules/modules';

@Module({
  imports: [...MAIN_MODULES],
  controllers: [],
  providers: [],
})
export class AppModule {}
