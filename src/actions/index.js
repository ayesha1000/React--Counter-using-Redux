
export function increment(){
    return{
        type:'INCREMENT'}
}

export function decrement(){
    return{
        type:'DECREMENT'}
}


export function reset (){
    return{
        type:'RESET'}
}
export function checkvalue(value){
    return{
        type:'CHECK',
    value}
}

