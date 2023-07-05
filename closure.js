/** Closure : javascript allows writing an inside function in out function. 
 * we can write as many inner functions as we want. 
 * if the inner function access the variables of outer function then that is a closure. 
 */

const outerFunction =() => {
    let count = 0;
    const innerFunction = () => {
        count++
        return count
    }

    return innerFunction
}
const innerFunc = outerFunction()

console.log(innerFunc())
console.log(innerFunc())
console.log(innerFunc())

const Outer = () =>{
    let counter = 0;
    const sumInner = () =>{
        counter ++
        return counter
    }
    
    const subInner = () =>{
        counter --
        return counter
    }
    return {
        SumInner: sumInner(),
        SubInner: subInner()
    }
}

const InnerFunc = Outer () 
console.log(InnerFunc.SubInner)
console.log(InnerFunc.SubInner)