var register_Customer = document.querySelector('#register_Customer');
var register_Baker = document.querySelector('#register_Baker');
var bakertab = document.querySelector('#baker-tab');
var customertab = document.querySelector('#customer-tab');

bakertab.addEventListener('click',function(){
    bakeractive();
});

customertab.addEventListener('click',function(){
    customeractive();
});

function bakeractive(){
    register_Customer.style.display = "none";
    register_Baker.style.display = "block";
    bakertab.classList.add('active');
    customertab.classList.remove('active');
}

function customeractive(){
    register_Customer.style.display = "block";
    register_Baker.style.display = "none";
    customertab.classList.add('active');
    bakertab.classList.remove('active');
}