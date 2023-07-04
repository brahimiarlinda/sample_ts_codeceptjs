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
      endpoint: 'BaseURl',
      onRequest: (request) => {
        request.headers['X-API-Key'] = '';
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
