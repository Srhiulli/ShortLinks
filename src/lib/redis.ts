import { createClient } from "redis";
export const redis = createClient({
    url: 'redis://:docker@localhost:6379', database: 1,
})
redis.connect()