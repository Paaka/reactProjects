export const location  = ()=>{
     navigator.geolocation.getCurrentPosition(showPosition);
   
}
  
function showPosition(position) {
    console.log(position)
  }