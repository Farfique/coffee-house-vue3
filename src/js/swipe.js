export const addSwipeListener = (element, callback) => {
    let touchstartX = 0
    let touchendX = 0
        
     element.addEventListener('touchstart', e => {
       touchstartX = e.changedTouches[0].screenX
    })

     element.addEventListener('touchend', e => {
       touchendX = e.changedTouches[0].screenX;
       let direction = checkDirection(touchstartX, touchendX);
       callback(direction);
    })
}
  
 const checkDirection = (start, end) => {
   if (end < start) {
     return 'next'
   }
   if (end > start) {
    return 'previous';
  }
  return 'none';
 }