
const initialState = {
    counter: 0,
    countarray:[0],
    value: 0
}
const reducer=(state=initialState,action)=>{
    switch(action.type){
        case 'INCREMENT':
           return{
               ...state,
            countarray: [...state.countarray, state.counter+1],
            counter:state.counter+1
           }
      
        
        case 'DECREMENT': 
        if(state.countarray.length>1){
        return{
            ...state,
         countarray: state.countarray.slice(0,-1),
         counter:state.counter-1

        }}
        else{ alert('Array Empty')}
        case 'RESET': return {countarray: [0],counter:0} 

        case 'CHECK': 

        console.log(action.value)
        if(state.countarray.includes(parseInt(action.value))){
            alert('Number Found')
            
        }
        else{
            alert('Number not Found')
           
        }
 
        default: return state
        
    }
}
export default reducer;
