export function checkViewportWidth(breakpoint:number){

  if(window){
    return window.innerWidth < breakpoint ? true : false
  }else{
    return true
  }
  
}