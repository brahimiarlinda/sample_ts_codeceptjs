const { I } = inject();
const requestBody = {
  label: '2',
  object: 'person'
};

export = {
  myPostRequest: async () => {
    return await I.sendPostRequest('/tags', requestBody);
  }
}