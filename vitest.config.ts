// vitest.config.ts
import { defineVitestConfig } from '@nuxt/test-utils/config';

export default defineVitestConfig({
  test: {
    environment: 'nuxt',
    environmentOptions:{
        testFileExtension: '.spec.ts', 
        testFramework: {
          name: '@testing-library/vue',
        },
    }
  },
})