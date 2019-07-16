const axios = require('axios');
const MockAdapter = require('axios-mock-adapter');

const mock = new MockAdapter(axios);

mock.onGet('/users').reply(200, {
  users: [
    {id:1, name:'john smith'}
  ]
})

export default mock;