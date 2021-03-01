 // 50
 document.getElementById('treesum-btn').onclick = function() {
     var arr = [5, 7, [4, [2], 8, [1, 3], 2], // обьявление массива
         [9, []], 1, 8
     ];
     var sum = 0;

     function arrSum(array) {

         array.forEach(function(value) {
             Array.isArray(value) ? arrSum(value) : sum += value;
         });

         return sum;
     }

     console.log(arrSum(arr)),
         alert('Сумма все элеметов массива: ' + sum);
 }