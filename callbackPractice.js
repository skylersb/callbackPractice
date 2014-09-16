/* Declare and Define the functions here that will make the function calls below work properly */

var first = function(arr, cb){
  var theName = arr[0];
  cb(theName);
}

var last = function(arr, cb){
  var theName = arr[6];
  cb(theName);

}

var multiply = function(x, y, cb){
    var theAnswer = x * y;
    cb(theAnswer);

}

var contains = function(arr, ind, cb){
  var found = '';
  for(var i = 0; i < arr.length; i++){
    if(arr[i] === ind){
      found = arr[i];
    }

  }
  cb(found);

}

var isFound = function(found){
if(found){
  console.log(Found + " is in the array");
} else {
  console.log(Found + " is not in the array");
}

}
contains(names, 'Colt', isFound);

var uniq = function(arr, cb){
  var newArray = names.reduce(function(a,b){
    if (a.indexOf(b) < 0 ) a.push(b);
    return a;
  },[]);
  cb(newArray);
}

var each = function(arr, cb){
  for(var i = 0; i < arr.length; i++){
    if(arr[i] === )
  }

}

var find = function(item, indice){


}

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];

first(names, function(firstName){
  console.log('The first name in names is ', firstName)
});

last(names, function(lastName){
  console.log('The last name in names is ', lastName);
});

multiply(3,4,function(answer){
  console.log('The answer is ', answer);
})

contains(names, 'Colt', function(yes){
  if(yes){
    'Colt is in the array';
  } else {
    'Colt is not in the list';3
  }
});

uniq(names, function(uniqArr){
  console.log('The new names array with all the duplicate items removed is ', uniqArr);
});

each(names, function(item, indice){
  console.log('The item in the ' + indice + 'position is ' + item)
});

var users = [
  {
    id: '12d',
    email: 'tyler@gmail.com',
    name: 'Tyler',
    address: '167 East 500 North'
  },
  {
    id: '15a',
    email: 'cahlan@gmail.com',
    name: 'Cahlan',
    address: '135 East 320 North'
  },
  {
    id: '16t',
    email: 'ryan@gmail.com',
    name: 'Ryan',
    address: '192 East 32 North'
  },
];

getUserById('16t', function(user){
  console.log('The user with the id 16t has the email of ' + user.email + 'the name of ' + user.name + ' and the address of ' + user.address); 
});







