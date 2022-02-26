// 3 dot diye kono array dile oi arrray er sokol upadan k bujay tobe ta kono array noy 
// ukto array er upadan gula dhore niye aste 3dot diye array er name likha hoy ake spread operator bole

const numbers = [52 , 58 ,39 ,3 ,309, 94];
const max = Math.max(...numbers);

// use spread operator for make new array by the elements of ager array


// akhetre noton array er moddhe purber array er upadan gulo naoya hoyeche direct oi array ke call kora hoy ni so ja push kora hoyeche ta oi array te push hoyeche kinty noton array te hoy ni 
const newNumbers = [...numbers ,];
numbers.push ('55');
console.log(newNumbers)