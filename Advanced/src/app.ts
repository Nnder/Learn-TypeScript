const message: string = 'hello';
const button: Element = document.querySelector('#btn')!;
button.addEventListener('click', ()=>{
  console.log('Clicked')
})


function logInfo(data: string, d?: number){
  console.log(data)
}

logInfo("15")