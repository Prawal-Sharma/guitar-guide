declare global {
  namespace NodeJS {
    interface ProcessEnv {
      VERCEL_URL?: string;
      VERCEL_ENV?: 'production' | 'preview' | 'development';
      NODE_ENV: 'development' | 'production' | 'test';
    }
  }
}

export {};