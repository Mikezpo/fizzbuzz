const projectName = 'FizzBuzz';

document.querySelector('button').addEventListener('click', fizzbuzz)

function fizzbuzz(){
  
  let numTwo = Number(document.querySelector('input').value)
  document.querySelector('#elementH3').innerText = ""
  
  for(let i = 1; i <= numTwo; i++){
    if(i % 5 === 0 && i % 3 === 0){
      document.querySelector('#elementH3').innerText = 'FizzBuzz'
    }else if(i % 3 === 0){
      document.querySelector('#elementH3').innerText = 'Fizz'
    }else if(i % 5 === 0){
      document.querySelector('#elementH3').innerText = 'Buzz'
    }else{
      document.querySelector('#elementH3').innerText = i
    }
  }
}
