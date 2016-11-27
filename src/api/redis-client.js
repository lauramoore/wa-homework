import redis from 'redis';

let client = null;

function setup() {
		client = redis.createClient(process.env.REDIS_URL);

	client.on('connect', function() {
		console.log('redis client emitted connect event');
	});

	client.on('error', function (err) {
		console.error(err, 'redis error');
	});
}

export {setup as setupRedis, client as redisClient};
