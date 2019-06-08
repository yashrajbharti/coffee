// Get modal element
var modal = document.getElementById('simpleModal');
// Get mini element
var mini = document.getElementById('miniModal');
// Get open modal button
var modalBtn = document.getElementById('modalBtn');
// Get close button
var closeBtn = document.getElementsByClassName('closeBtn')[0];
// Get close 2 button
var closeBtn2 = document.getElementsByClassName('closeBtn2')[0];
// Get min button
var minBtn = document.getElementsByClassName('minBtn')[0];
// Get max button
var maxBtn = document.getElementsByClassName('maxBtn')[0];

// Listen for open click
modalBtn.addEventListener('click',openModal);

// Listen for close click
closeBtn.addEventListener('click',closeModal);

// Listen for close2 click
closeBtn2.addEventListener('click',close2Modal);
//Listen for min click
minBtn.addEventListener('click',minModal);
//Listen for max click
maxBtn.addEventListener('click',maxModel);
//Listen for outside click
window.addEventListener('click',outsideClick);

// Function to open modal
function openModal(){
  modal.style.display = 'block';
  mini.style.display = 'none';
}
// Function to close modal
function closeModal(){
  modal.style.display = 'none';
}
// Function to close2 modal
function close2Modal(){
  mini.style.display = 'none';
}
// Function to close modal if outside click
function outsideClick(e){
  if(e.target == modal){
  modal.style.display = 'none';
  }
}
// Function to min modal
function minModal(){
  mini.style.display = 'block';
  modal.style.display = 'none';
}
// Function to max modal
function maxModel() {
  mini.style.display = 'none';
  modal.style.display = 'block';
}
