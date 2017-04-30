import { test } from 'tap'
import to from '../src'

const f = () => Promise.resolve(42)
const g = () => Promise.resolve('42')
const x = () => Promise.reject(new Error('Error'))

test('to should work with number', async (t) => {
  t.plan(2)
  const [err, n] = await to(f())
  t.false(err)
  t.true(n)
})

test('to should work with string', async (t) => {
  t.plan(2)
  const [err, s] = await to(g())
  t.false(err)
  t.true(s)
})

test('to should work with errors', async (t) => {
  t.plan(2)
  const [err, _] = await to(x())
  t.true(err)
  t.false(_)
})

test('to should work with extended errors', async (t) => {
  t.plan(3)
  const [err, _] = await to(x(), { message: 'custom error' })
  t.true(err)
  t.true(err.message === 'custom error')
  t.false(_)
})
