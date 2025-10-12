import { Redis } from '@upstash/redis';

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

export async function setOTP(email: string, otp: string) {
  const key = `otp:${email.toLowerCase()}`;
  await redis.setex(key, 330, otp);
}

export async function getOTP(email: string): Promise<string | null> {
  const key = `otp:${email.toLowerCase()}`;
  return await redis.get(key);
}

export async function deleteOTP(email: string) {
  const key = `otp:${email.toLowerCase()}`;
  await redis.del(key);
}

export default redis;