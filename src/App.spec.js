import delay from 'redux-saga'

it('async test using done', (done) => {
  setTimeout(done, 100)
})

it('async test using promise', () => {
  return new Promise((resolve) => setTimeout(resolve, 1500))
})

it('async test using async/await', async () => {
  await delay(100)
})
