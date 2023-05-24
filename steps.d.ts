/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file');
type PageObjectSample = typeof import('./pages/PageObjectSample');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, PageObjectSample: PageObjectSample }
  interface Methods extends REST, JSONResponse, Playwright {}
  interface I extends ReturnType<steps_file>, WithTranslation<JSONResponse> {}
  namespace Translation {
    interface Actions {}
  }
}
