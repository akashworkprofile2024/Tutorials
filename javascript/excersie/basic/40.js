const variable = (receiver)=>{
  let store = receiver.slice(1 , -1)
  return store
};console.log(variable('python'))