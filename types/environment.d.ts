declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_APP_URL?: string;
      VERCEL_URL?: string;
      VERCEL_ENV?: 'production' | 'preview' | 'development';
      NODE_ENV: 'development' | 'production' | 'test';
    }
  }
}

export {};