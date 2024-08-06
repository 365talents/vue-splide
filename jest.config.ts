import type { Config } from 'jest';

export default {
  rootDir: './src',
  transform: {
    '^.+\\.[tj]s$': 'ts-jest',
  },
  testEnvironment: 'jsdom',
} satisfies Config;
