// use local storage to manage cart data
const addToDb = value => {
   let breakDuration = value;
   localStorage.setItem('break-duration', JSON.stringify(breakDuration));
}

const getStoredData = () => {
   let breakDuration = 0;
   const storeddData = localStorage.getItem('break-duration');
   if (storeddData) {
       breakDuration = JSON.parse(storeddData);
   }
   return breakDuration;
}

export {
   addToDb,
   getStoredData
}