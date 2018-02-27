import { Controller, Get, Post, Res, Body } from '@nestjs/common';
import { PollService } from './poll.service';


@Controller('poll')
export class PollController {
    constructor(private pollService: PollService) {}

    @Get()
    root() {
        return "This is super cool"
    }

    @Post()
    submitVote(@Res() res, @Body() poll: string) {
        this.pollService.create(poll);
        res.render('index');
    }
}