const nodes = {
  node: 10,
  left: {
    node: 20,
    left: {
      node: 5,
    },
  },
  right: {
    node: 30,
    left: {
      node: 15,
      right: {
        node: 5
      }
    }
  }
}

const node = 5;

function findNode(nodeses, node) {
  const objectArr = [];
  objectArr.push(nodeses)
  let current = objectArr.pop()
  
  while (current) {
    if (current.node === node) {
      return current;
    }
    if (current.left) {
      objectArr.push(current.left)
    }
    if (current.right) {
      objectArr.push(current.right)
    }
    
    if (objectArr.length > 0) {
      current = objectArr.pop()
    }
  }
  return current.node
}

console.log(findNode(nodes, node))



const string = 'abababbbcccccccaaaa';

function countChars(str) {
  let ans = '';
  let anscnt = 0;
  
  for (let char of str) {
    let nowcnt = 0;
    for (let botCount of str) {
      if (char === botCount) {
        nowcnt += 1
      }
    }
    
    if (nowcnt > anscnt) {
      ans = char;
      anscnt = nowcnt
    }
  }
  console.log(ans)
}

console.log(countChars(string))