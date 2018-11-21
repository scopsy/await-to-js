import { to } from "../src/await-to-js"

describe("Await to test", () => {
  it("should return a value when resolved", async () => {
    const testInput = 41
    const promise = Promise.resolve(testInput)

    const [err, data] = await to<number>(promise)

    expect(err).toBeNull()
    expect(data).toEqual(testInput)
  })

  it("should return an error when promise is rejected", async () => {
    const testInput = 41
    const promise = Promise.reject("Error")

    const [err, data] = await to<number>(promise)

    expect(err).toEqual("Error")
    expect(data).toBeUndefined()
  })

  it("should add external properties to the error object", async () => {
    const promise = Promise.reject({ error: "Error message" })

    const [err] = await to<
      string,
      { error: string; extraKey: number }
    >(promise, {
      extraKey: 1
    })

    expect(err).toBeTruthy()
    expect(err.extraKey).toEqual(1)
    expect(err.error).toEqual("Error message")
  })

  it("should return an error if passed object is not a promise", async () => {
    const promise = {}

    const [err, data] = await to<number>(promise)

    expect(err).toEqual("Error")
    expect(data).toBeUndefined()
  })
})
