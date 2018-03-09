import { Component } from '@nestjs/common';

@Component()
export class PollService {

    private poll: string;

    create(poll) {
        const Ably = require('ably');
        var ably = new Ably.Realtime('YOUR_KEY');
        var channel = ably.channels.get('YOUR_CHANNEL');

        const data = {
            points: 1,
            movie: poll.movie
        };

        channel.publish('vote', data);
    }
}