import { Module } from '@nestjs/common';
import { SupportModule } from './controllers/support/support.module';

@Module({
  imports: [SupportModule],
})
export class MainModule {}
