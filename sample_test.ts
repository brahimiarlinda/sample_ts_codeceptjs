//const { I, PageObjectSample } = inject();


Feature('sample');

Scenario('test something', async ({I, PageObjectSample}) => {
  
  const response =  await PageObjectSample.myPostRequest();

  console.log('response: ', response);
});
