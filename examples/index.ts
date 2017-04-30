import to from '../src'

const f = () => Promise.resolve(42)
const g = () => Promise.resolve('42')

async function main() {
  const [err, n] = await to(f())
  if (err) {
    throw err
  } else {
    n // number | null # should be only number
  }

  console.log(n) // number | null # should be only number

  const [err1, m] = await to(g())
  if (err) {
    throw err
  } else {
    m // string | null # should be only string
  }

  console.log(m) // number | null # should be only string
}

main()
