// function test(arg1,arg2){
//     console.log(this.name,arg1,arg2);
// }
// const testName={
//     name:'Ankita'
// }
// test.call(testName,100,200)

// function test(...arguments){
//     console.log(this.name,arguments);
// }
// const testName={
//     name:'Ankita'
// }
// test.apply(testName,[100,200])

// function test(arg){
//     console.log(this.name,arg);
// }
// const testName=test.bind({name:'Ankita'},'Mishra')
// testName()