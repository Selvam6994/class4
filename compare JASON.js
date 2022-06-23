var isEqualsJson = (obj1,obj2)=>{
    keys1 = Object.keys(obj1);
    keys2 = Object.keys(obj2);
 return keys1.length == keys2.length && Object.keys(obj2).every(key=>obj1[key]==obj2[key]);
};
var obj1 = {id:1001,
            age: 26,
            name:"zzz"
        };
var obj2 = {name:"zzz",
            id:1001,
            age:26
        }; 

console.log(isEqualsJson(obj1,obj2));
