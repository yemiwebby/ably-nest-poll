import { Component } from '@nestjs/common';
import { Poll } from './interface/poll';


@Component()
export class PollService {

    private poll: string;

    create(poll) {
        const Ably = require('ably');
        var ably = new Ably.Realtime('YOUR KEY');
        var channel = ably.channels.get('YOUR CHANNEL');

        const data = {
            points: 1,
            movie: poll.movie
        };

        channel.publish('vote', data);
    }
}