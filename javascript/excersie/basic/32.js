function hrfun(number){
  const hrs = Math.floor(number / 60);
  const min = number % 60
  return `Hrs:${hrs} Min:${min}`
};console.log(hrfun(450));