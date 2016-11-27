import express from 'express';
import {setupRedis, redisClient} from './redis-client';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 3000;
app.get('/', (req, res) => {
   res.send('Chat The World!');
});

app.get('/counter', (req, res, next) => {
	redisClient.incr('inc-counter', (err, result) => {
		if (err) {
			next(err);
		}
		else {
			res.json({ incResult: result });
		}
	})
});

setupRedis();

app.listen(port, () => {
 console.log('Express app listening on port ' + port);
});
