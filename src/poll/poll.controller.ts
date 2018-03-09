import { Controller, Post, Res, Body } from '@nestjs/common';
import { PollService } from './poll.service';


@Controller('poll')
export class PollController {
    constructor(private pollService: PollService) {}

    @Post()
    submitVote(@Res() res, @Body() poll: string) {
        this.pollService.create(poll);
        res.render('index');
    }
}