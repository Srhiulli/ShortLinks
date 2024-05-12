import { createClient } from 'redis';
export const redis = createClient({
    url: 'redis://:docker@localhost:6379/0',
})
redis.connect()