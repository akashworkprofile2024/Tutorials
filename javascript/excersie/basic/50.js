const arr = [3, 5, 6, 8];

const variable = (reciever) => {
  [reciever[0], reciever[reciever.length - 1]] = 
  [reciever[reciever.length - 1], reciever[0]];
  return reciever;
};

console.log(variable(arr)); 
// 👉 [8, 5, 6, 3]
