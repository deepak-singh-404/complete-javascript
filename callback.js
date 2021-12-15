const secondFn = (data, callback) =>{
    let res = data * 2
    callback(res)

}

const firstFn = ()=>{
    secondFn(1,(data)=>{
        console.log("data",data)
    })
}

firstFn()