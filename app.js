const showRating = (rating) => {
  let stars = [];
  for (let i = 0; i < Math.floor(rating); ++i) {
    stars += "*";
    if (i !== Math.floor(rating) - 1) {
      stars += " ";
    }
  }
  if (!Number.isInteger(rating) && rating >= 1) {
    stars += " .";
  } else if (!Number.isInteger(rating)) {
    stars += ".";
  }
  return stars;
};

console.log(showRating(4.5));

function lowToHigh(arr) {
  let newArr = arr.sort((a, b) => a - b);
  return newArr;
}

console.log(lowToHigh([4, 3, 2, 1]));

function highToLow(numbers) {
  return numbers.sort((a, b) => b.price - a.price);
}

console.log(
  highToLow([
    { id: 1, price: 50 },
    { id: 2, price: 30 },
    { id: 3, price: 60 },
    { id: 4, price: 10 },
  ])
);

async function postsByUser(uid) {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await response.json()
    let results = data.filter(post => post.userId === uid)
    console.log(results)
};

postsByUser(4);

async function falseToDos(numberOfToDos) {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos")
    const data = await response.json()
    let results = data.filter(toDo => !toDo.completed).slice(0, numberOfToDos)
    console.log(results)
};

falseToDos(6);