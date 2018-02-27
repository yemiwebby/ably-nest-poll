import { Component } from '@nestjs/common';
import { Poll } from './interface/poll';


@Component()
export class PollService {

    private poll: string;

    create(poll) {
        const Ably = require('ably');
        var ably = new Ably.Realtime('C0d5-w.eiJTaw:P_eRKDclpXwA3jZu');
        var channel = ably.channels.get('quickstart');

        const data = {
            points: 1,
            movie: poll.movie
        };

        channel.publish('vote', data);
    }
}