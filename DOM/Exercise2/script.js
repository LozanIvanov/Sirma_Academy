function  getFormvalue(){
    event.preventDefault();
   const first=document.querySelector('input[name=fname').value;
   const second=document.querySelector('input[name=lname');
   const output=document.getElementById('one');
  output.textContent=first +' '+ second.value;

}                                          

