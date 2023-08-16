// npm install -D vitest
// npm install @vue/test-utils --save-dev
// npm install @vue/test-utils@next --save-dev
// npm install @vue/test-utils@next --save-dev
// npm i happy-dom
// npm i @testing-library/vue

// npm i -D whatwg-fetch msw == becose we're useing fetch, then
// go to vite.config.js and add this ->
// test: {
//   globals: true,
//   setupFiles: 'sec/setupTests.js'
// },
// after this you have to create this file sec/setupTests.js

import { test, expect } from 'vitest'

const user = {
  name: 'Matt',
  age: 22
}

test('Matt is 22', () => {
  expect(user.name).toBe('Matt')
  expect(user.age).toBe(22)
})
