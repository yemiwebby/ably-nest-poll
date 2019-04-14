import { Injectable } from '@nestjs/common';

@Injectable()
export class PollService {
    private poll: string;

    create(poll) {
        const Ably = require('ably');

        const ably = new Ably.Realtime('YOUR-KEY');

        const channel = ably.channels.get('ably-nest');
        const data = {
            points: 1,
            movie: poll.movie,
        };
        channel.publish('vote', data);
    }
}
