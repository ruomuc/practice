const x = [1, 2, 3, 4]
const y = []
const z = []

function move (source, target) {
  const top = source.shift()
  target.unshift(top)
  print()
}

function hanio (n, x, y, z) {
  if (n < 1) {
    console.log('n不能小于1')
    return
  } else if (n === 1) {
    move(x, z)
  } else {
    // 第一步，把x->y
    hanio(n - 1, x, z, y)
    // 第二步，把x->z
    move(x, z)
    // 第三步：把y->z
    hanio(n - 1, y, x, z)
  }
}

function print () {
  console.log('x:', x)
  console.log('y:', y)
  console.log('z:', z)
  console.log('---------')
}

hanio(x.length, x, y, z)
print()
