export function callAll<Args extends unknown[]>(
  ...fns: ((...args: Args) => void)[]
) {
  return (...args: Args) => fns.forEach(fn => fn(...args))
}

function log(message: string, arg2?: number) {
  console.log(message, arg2)
  return message + 'aaa'
}

function warn(message: string, arg2?: number) {
  console.warn(message, arg2)
  return 'arr'
}

const callTheFunctions = callAll(warn, log)

callTheFunctions('aee', 2)
