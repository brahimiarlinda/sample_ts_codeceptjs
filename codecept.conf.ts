import {
  setHeadlessWhen,
  setCommonPlugins
} from '@codeceptjs/configure';
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

export const config: CodeceptJS.MainConfig = {
  tests: './*_test.ts',
  output: './output',
  helpers: {
    REST: {
      endpoint: 'https://charles-qa.hello-charles.com/api/v0',
      onRequest: (request) => {
        request.headers['X-API-Key'] = '885d5c64-4586-4d0c-a3d1-61ca21f551d5';
      },
    },
    JSONResponse: {},
    Playwright: {
      url: 'http://localhost',
      show: false,
      browser: 'chromium'
    }
  },
  include: {
    I: './steps_file',
    PageObjectSample: './pages/PageObjectSample.ts'
  },
  name: 'sample_ts_codeceptjs'
}