


const {myFunction,sum,fetchData,fetchPromise}=require("./sum")


test('adds 1+2 to equal 3',()=>{
    expect(sum(1,2)).toBe(3);
})


test('object assignment',()=>{
    const data={
        'one':1
    }

    data['two']=2
    expect(data).toEqual({one:1,two:2})
})


test('null is falsy',()=>{
    const n=null;
    expect(n).toBeFalsy();
})

test("one is truthy", () => {
  const n = 1;
  expect(n).toBeTruthy();
})



// test('one is truthy', () => { 
//     const n=1
//     expect(n).toThrow();
//  })


 test('throw invalid input',()=>{
    expect(()=>{
        myFunction(invalidInput);
    }).toThrow()
 })




test('the data is pure',done=>{
    function callback(data){
        try{
            expect(data).toBe('Done')
            done()
        }catch(error){
            done(error)
        }
    }

    fetchData(callback)
})





test('TOPGUN',()=>{
    return expect(fetchPromise()).resolves.toBe('topgun')
})



test("failure", () => {
  return expect(fetchPromise()).rejects.toThrow();
})


test("topgun async",async()=>{
    const data=await fetchPromise();
    expect(data).toBe('topgun')
})




