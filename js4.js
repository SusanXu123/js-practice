console.log('this is js 4')

for(var i=0; i<1000000000; i++){
    // 这个同步脚本将延迟DOM的解析。
    // 所以DOMContentLoaded事件稍后将启动。
  // if (i === 999999999) {
  //   console.log('999999994');
  // }
} 

console.log('this is js 4--end')