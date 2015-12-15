//test1
//function foo() {
//    console.log(this.fruit);
//}
//var fruit = "apple";
//var pack = {
//    fruit: "orange"
//};

////foo.apply(window);
//foo.apply(pack);

//test2
//function foo() {
//    if(this==window){
//        console.log("window");
//    }
//}
//foo.boo = function () {
//    if (this == foo) {
//        console.log(foo);
//    } else if (this == window) {
//        console.log("this is window");
//    }
//};
//foo();
//foo.boo();
//foo.boo.apply(window);

//test3
//function Person(name) {
//    this.name = name;
//}
//Person.prototype = {
//    getName: function () {
//        return this.name;
//    }
//}
//var zhang = new Person("ZhangSan");
//console.log(zhang.getName());//

//test4
Array.prototype.min = function () {
    var min = this[0];
    for (var i = 0; i < this.length; i++) {
        if(this[i]<min){
            min = this[i];
        }
    }
    return min;
}
var arr = [1, 56, 34, 12];
var total = 0;
for (var i in arr) {
    total += parseInt(arr[i], 10);
    console.log(arr[i], 10);
}
console.log(total);   // NaN









