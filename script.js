let billamount = document.getElementById('billamount');
let numberofguests = document.getElementById('numberofguests');
let calbutton = document.querySelector('.calbutton')
let h5 =  document.querySelector('h5')
let val = ""
let select = document.querySelector('select');
select.addEventListener('click',function(dets){
val = dets.target.value
})
function calculate(){
if(val == '0'){
    h5.style.display = 'block'
    h5.innerText = 'Please choose a service quality';
    calbutton.style.display = 'none'

}else{
let output = (billamount.value/numberofguests.value)*val
    h5.style.display = 'block'
    h5.innerText = `The tip is ${output}$`;
    calbutton.style.display = 'none'

}
}
let reset =()=>{
document.location.reload()
}

