let y =1
let arr1 = [0 ,0 ,0]
let arr2 = [0 ,0 ,0]
let arr3 = [0 ,0 ,0]
let count = 0
let result = false
function test_btn(x){
  console.log(x);
  count = count + 1
  if (y%2===0){
    console.log('even chance')
    add_element(x)
    y = 1
    document.getElementById(x).innerHTML = '0'
    document.getElementById(x).disabled = true 
  }
  else{
    console.log('odd chance')
    add_element(x)
    y = y + 1
    document.getElementById(x).innerHTML = 'X'
    document.getElementById(x).disabled = true
  }
}
function add_element(z){
  if(z==='1'){
    if(y%2===0){
    arr1[0] = 2
    }
    else{
      arr1[0] = 1
    }
    
  }
  if(z==='2'){
    if(y%2===0){
    arr1[1] = 2
    }
    else{
      arr1[1] = 1
    }
    
  }
  if(z==='3'){
    if(y%2===0){
    arr1[2] = 2
    }
    else{
      arr1[2] = 1
    }
    
  }
  if(z==='4'){
    if(y%2===0){
    arr2[0] = 2
    }
    else{
      arr2[0] = 1
    }
    
  }
  if(z==='5'){
    if(y%2===0){
    arr2[1] = 2
    }
    else{
      arr2[1] = 1
    }
    
  }
  if(z==='6'){
    if(y%2===0){
    arr2[2] = 2
    }
    else{
      arr2[2] = 1
    }
    
  }
  if(z==='7'){
    if(y%2===0){
    arr3[0] = 2
    }
    else{
      arr3[0] = 1
    }
    
  }
  if(z==='8'){
    if(y%2===0){
    arr3[1] = 2
    }
    else{
      arr3[1] = 1
    }
    
  }
  if(z==='9'){
    if(y%2===0){
    arr3[2] = 2
    }
    else{
      arr3[2] = 1
    }
    
  }
  console.log(arr1)
  console.log(arr2)
  console.log(arr3)
  check_result()
}
function check_result(){
  // condition 1 row 1
  if(arr1[0]===arr1[1] && arr1[1]===arr1[2] && arr1[0]!=0 ){
    result = true
    announce_result(arr1[0])
  }
  // condition 2 row 2
  if(arr2[0]===arr2[1] && arr2[1]===arr2[2] && arr2[0]!=0){
    result = true
    announce_result(arr2[0])
  }
  // condition 3 row 3
  if(arr3[0]===arr3[1] && arr3[1]===arr3[2] && arr3[0]!=0){
    result = true
    announce_result(arr3[0])
  }
  // condition 4 col 1
  if(arr1[0]===arr2[0] && arr2[0]===arr3[0] && arr1[0]!=0){
    result = true
    announce_result(arr1[0])
  }
  // condition 5 col 2
  if(arr1[1]===arr2[1] && arr2[1]===arr3[1] && arr1[1]!=0){
    result = true
    announce_result(arr1[1])
  }
  // condition 6 col 3
  if(arr1[2]===arr2[2] && arr2[2]===arr3[2] && arr1[2]!=0){
    result = true
    announce_result(arr1[2])
  }
  // condition 7 diag 1
  if(arr1[0]===arr2[1] && arr2[1]===arr3[2] && arr1[0]!=0){
    result = true
    announce_result(arr1[0])
  }
  // condition 8 diag 2
  if(arr1[2]===arr2[1] && arr2[1]===arr3[0] && arr1[2]!=0){
    result = true
    announce_result(arr1[2])
  }
  if(count===9 && result === false){
    document.getElementById('result').innerHTML = 'Draw'
    document.getElementById('result').className = 'alert alert-warning mt-2'
   
  }
}
function announce_result(k){
  if(k===1){
    disable_all()
    document.getElementById('result').innerHTML = 'X wins!'
    document.getElementById('result').className = 'alert alert-warning mt-2'
   
    
  }
  if(k===2){
    disable_all()
    document.getElementById('result').innerHTML = '0 wins!'
    document.getElementById('result').className = 'alert alert-warning mt-2'
    
    
  }
}
function disable_all(){
  document.getElementById('1').disabled = true
  document.getElementById('2').disabled = true
  document.getElementById('3').disabled = true
  document.getElementById('4').disabled = true
  document.getElementById('5').disabled = true
  document.getElementById('6').disabled = true
  document.getElementById('7').disabled = true
  document.getElementById('8').disabled = true
  document.getElementById('9').disabled = true
}