interface User {
  name: string
  age: number
}

const user: User = {
  name: 'Hun',
  age: 27
}

console.log(user)

// any는 명시적으로 작성해주자, any는 권장하지 않는다
function hello(msg: any) {
  console.log(msg)
}
hello('abc')