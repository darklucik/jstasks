function greet(name) {
    return `Привет, ${name}. Как у тебя дела сегодня?`;
  }
  
  // Проверка решения задачи:
  console.log(greet("Андрей"));
  console.log(greet("Маша"));  
  
  function isDigit(str) {
    return !isNaN(parseFloat(str)) && isFinite(str.trim());
  }
  
  // Проверка решения задачи:
  console.log(isDigit("3"));     
  console.log(isDigit("  3  "));  
  console.log(isDigit("-3.23"));  
  console.log(isDigit("3-4"));    
  console.log(isDigit("  3   5"));
  console.log(isDigit("3 5"));    
  console.log(isDigit("ноль"));   

  function opposite(number) {
    return -number;
  }
  
  // Проверка решения задачи:
  console.log(opposite(1));          
  console.log(opposite(0));          
  console.log(opposite(4.25));       
  console.log(opposite(3.3333333));  
  console.log(opposite(-12525220.3325)); 
  console.log(opposite(-5));      

  function repeatStr(n, s) {
    return s.repeat(n);
  }
  
  // Проверка решения задачи:
  console.log(repeatStr(3, "*"));    
  console.log(repeatStr(5, "#"));    
  console.log(repeatStr(2, "ha "));  
  console.log(repeatStr(3, "*"));    

  function twiceAsOld(dadYearsOld, sonYearsOld) {
    return Math.abs(dadYearsOld - sonYearsOld * 2);
  }
  
  // Проверка решения задачи:
  console.log(twiceAsOld(36, 7));  
  console.log(twiceAsOld(55, 30)); 
  console.log(twiceAsOld(42, 21)); 
  console.log(twiceAsOld(22, 1));  
  console.log(twiceAsOld(29, 0));  

  function isPalindrome(line) {
    const str = String(line).toLowerCase();
    return str === str.split('').reverse().join('');
  }
  
  // Проверка решения задачи:
  console.log(isPalindrome("anna"));   
  console.log(isPalindrome("walter")); 
  console.log(isPalindrome(12321));    
  console.log(isPalindrome(123456));   
  console.log(isPalindrome("."));      
  console.log(isPalindrome(".!."));    

  function quarterOf(month) {
    return Math.ceil(month / 3);
  }
  
  // Проверка решения задачи:
  console.log(quarterOf(3));  
  console.log(quarterOf(8));  
  console.log(quarterOf(11)); 

  function points(games) {
    return games.reduce((totalPoints, game) => {
      const [x, y] = game.split(':').map(Number);
      if (x > y) {
        return totalPoints + 3;
      } else if (x === y) {
        return totalPoints + 1;
      } else {
        return totalPoints;
      }
    }, 0);
  }
  
  // Проверка решения задачи:
  console.log(points(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"])); 
  console.log(points(["1:1","2:2","3:3","4:4","2:2","3:3","4:4","3:3","4:4","4:4"])); 
  console.log(points(["0:1","0:2","0:3","0:4","1:2","1:3","1:4","2:3","2:4","3:4"])); 
  console.log(points(["1:0","2:0","3:0","4:0","2:1","1:3","1:4","2:3","2:4","3:4"])); 
  console.log(points(["1:0","2:0","3:0","4:4","2:2","3:3","1:4","2:3","2:4","3:4"])); 

  function sumOfDifferences(arr) {
    return arr.length > 1 ? arr.sort((a, b) => b - a).reduce((sum, _, index, array) => {
      if (index < array.length - 1) {
        sum += array[index] - array[index + 1];
      }
      return sum;
    }, 0) : 0;
  }
  
  // Проверка решения задачи:
  console.log(sumOfDifferences([1, 2, 10]));  
  console.log(sumOfDifferences([-3, -2, -1]));

  function countSheep(num) {
    let result = "";
    for (let i = 1; i <= num; i++) {
      result += `${i} овца... `;
    }
    return result;
  }
  
  // Проверка решения задачи:
  console.log(countSheep(0)); 
  console.log(countSheep(1)); 
  console.log(countSheep(2)); 
  console.log(countSheep(3)); 
  