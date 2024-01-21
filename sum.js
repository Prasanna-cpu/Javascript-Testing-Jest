
const sum=(a,b)=>{
    return a+b;
}



function myFunction(input){
    if(typeof input!=='number'){
        throw new Error("Invalid input")
    }
}







const fetchData=(callback)=>{
    setTimeout(()=>{
        callback('Done')
    },1000)
}

const fetchPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("topgun",1000);
    });
  });
};


module.exports = {
  sum: sum,
  myFunction: myFunction,
  fetchData: fetchData,
  fetchPromise: fetchPromise
};



