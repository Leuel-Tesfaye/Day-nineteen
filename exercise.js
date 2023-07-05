// Exercise 1 
// 1. Create a closure which has one inner function

const OuterFunc = () =>{
    let skills = ['html', 'css', 'js', 'react']
    const InnerFunc = () =>{
        for(let i = 0; i <= skills.length; i++){
                return skills
        }
    }
    return InnerFunc
}
const innerFunction = OuterFunc () 
console.log(innerFunction)

