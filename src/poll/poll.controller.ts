import { Controller, Get, Post } from '@nestjs/common';


@Controller('polls')
export class PollsController {
    @Post()
    submitVote() {
        
    }
}