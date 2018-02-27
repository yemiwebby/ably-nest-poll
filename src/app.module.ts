import { PollController } from './poll/poll.controller';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PollService } from './poll/poll.service';

@Module({
  imports: [],
  controllers: [AppController, PollController],
  components: [PollService],
})
export class ApplicationModule {}
