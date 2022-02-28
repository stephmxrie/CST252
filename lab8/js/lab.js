/**
Stephanie tried
**/
            // define
          array = [666, 777, 555, 12, 10, 50, 30, 6];
          console.log("My array ", array);

           // named function
            function addTen(x){
                return x + 10;
            }

            // test it
            console.log("What's 5 + 10? " + addTen(5));
            console.log("What's 666 + 10? " + addTen(666));

          var result = array.map(addTen);

          // test
          console.log("Add ten to the array: ", result);

          // multiply
          var result =  array.map(function(x){
                return x * 2;
            })
          // test
          console.log("Multiple the array by two: ", result);

          var sortedNumbers = array.sort(function(a, b) {
                	return a-b;
            	});
          console.log("Sorted Array: ", sortedNumbers);
