$(document).ready(function(){

  $('#menu').click(function(){
    $(this).toggleClass('fa-times');
    $('header').toggleClass('toggle');
  });

  $(window).on('scroll load',function(){

    $('#menu').removeClass('fa-times');
    $('header').removeClass('toggle');

    if($(window).scrollTop() > 0){
      $('.top').show();
    }else{
      $('.top').hide();
    }

  });


});


const showDetails1=()=>{
  const details= document.getElementById('display-details');
  details.textContent='';
  const div=document.createElement('div');
  div.classList.add('show-details')
  div.innerHTML=`
<h1 class="website-title">Panda E-Commerce Website</h1>
<h3 class="description">This Website is build by Using HTML,CSS,Bootstrap,Javascript</h4>
<div class="button-div">
<button class="display-button"><a target="_blank" href="https://nazim725.github.io/Panda-E-Commerce-Bootstrap/index.html">Live Site Link</a></button>
<button class="display-button"><a target="_blank" href="https://github.com/nazim725/Panda-E-Commerce-Bootstrap">Github Code Link</a></button>
</div>

  `;
  details.appendChild(div)

}

const showDetails2=()=>{
  const details= document.getElementById('display-details');
  details.textContent='';
  const div=document.createElement('div');
  div.classList.add('show-details')
  div.innerHTML=`
<h1 class="website-title">Weather API</h1>
<h3 class="description">This Website is build by Using HTML,CSS,Bootstrap,Javascript,API</h4>
<div class="button-div">
<button class="display-button"><a target="_blank" href="https://nazim725.github.io/Search-Weather-API/index.html">Live Site Link</a></button>
<button class="display-button"><a target="_blank" href="https://github.com/nazim725/Search-Weather-API">Github Code Link</a></button>
</div>

  `;
  details.appendChild(div)

}
const showDetails3=()=>{
  const details= document.getElementById('display-details');
  details.textContent='';
  const div=document.createElement('div');
  div.classList.add('show-details')
  div.innerHTML=`
<h1 class="website-title">Copa America website</h1>
<h3 class="description">This Website is build by Using HTML,CSS,Bootstrap</h4>
<div class="button-div">
<button class="display-button"><a target="_blank" href="https://nazim725.github.io/copa-America-2021/">Live Site Link</a></button>
<button class="display-button"><a target="_blank" href="https://github.com/nazim725/copa-America-2021">Github Code Link</a></button>
</div>

  `;
  details.appendChild(div)

}
const showDetails4=()=>{
  const details= document.getElementById('display-details');
  details.textContent='';
  const div=document.createElement('div');
  div.classList.add('show-details')
  div.innerHTML=`
<h1 class="website-title">Search Favorite Food</h1>
<h3 class="description">This Website is build by Using HTML,CSS,Bootstrap,Javascript,Api</h4>
<div class="button-div">
<button class="display-button"><a target="_blank" href="https://nazim725.github.io/Search-Favorite-Food/index.html">Live Site Link</a></button>
<button class="display-button"><a target="_blank" href="https://github.com/nazim725/Search-Favorite-Food">Github Code Link</a></button>
</div>

  `;
  details.appendChild(div)

}
const showDetails5=()=>{
  const details= document.getElementById('display-details');
  details.textContent='';
  const div=document.createElement('div');
  div.classList.add('show-details')
  div.innerHTML=`
<h1 class="website-title">Baper Bank</h1>
<h3 class="description">This Website is build by Using HTML,CSS,Bootstrap,Javascript</h4>
<div class="button-div">
<p style="color:white; margin-left:50px">User Name: Nazim  || Password:12345</p>

<button class="display-button"><a target="_blank" href="https://nazim725.github.io/BaperBank-JS/Login.htmll">Live Site Link</a></button>
<button class="display-button"><a target="_blank" href="https://github.com/nazim725/BaperBank-JS">Github Code Link</a></button>
</div>

  `;
  details.appendChild(div)

}
const showDetails6=()=>{
  const details= document.getElementById('display-details');
  details.textContent='';
  const div=document.createElement('div');
  div.classList.add('show-details')
  div.innerHTML=`
<h1 class="website-title">Shopping Cart</h1>
<h3 class="description">This Website is build by Using HTML,CSS,Bootstrap,Javascript</h4>
<div class="button-div">
<button class="display-button"><a target="_blank" href="https://nazim725.github.io/Shopping-Cart-js/">Live Site Link</a></button>
<button class="display-button"><a target="_blank" href="https://github.com/nazim725/Shopping-Cart-js">Github Code Link</a></button>
</div>

  `;
  details.appendChild(div)

}
const showDetails7=()=>{
  const details= document.getElementById('display-details');
  details.textContent='';
  const div=document.createElement('div');
  div.classList.add('show-details')
  div.innerHTML=`
<h1 class="website-title">Gorur Hat</h1>
<h3 class="description">This Website is build by Using HTML,CSS,Bootstrap</h4>
<div class="button-div">
<button class="display-button"><a target="_blank" href="https://nazim725.github.io/Gorur-Hat/">Live Site Link</a></button>
<button class="display-button"><a target="_blank" href="https://github.com/nazim725/Gorur-Hat">Github Code Link</a></button>
</div>

  `;
  details.appendChild(div)

}
const showDetails8=()=>{
  const details= document.getElementById('display-details');
  details.textContent='';
  const div=document.createElement('div');
  div.classList.add('show-details')
  div.innerHTML=`
<h1 class="website-title">Honda CRb</h1>
<h3 class="description">This Website is build by Using HTML,CSS,Bootstrap</h4>
<div class="button-div">
<button class="display-button"><a target="_blank" href="https://nazim725.github.io/Honda-crb/">Live Site Link</a></button>
<button class="display-button"><a target="_blank" href="https://github.com/nazim725/Honda-crb">Github Code Link</a></button>
</div>

  `;
  details.appendChild(div)

}
const showDetails9=()=>{
  const details= document.getElementById('display-details');
  details.textContent='';
  const div=document.createElement('div');
  div.classList.add('show-details')
  div.innerHTML=`
<h1 class="website-title">Book Archive</h1>
<h3 class="description">This Website is build by Using HTML,CSS,Bootstrap,javaScript,API</h4>
<div class="button-div">
<button class="display-button"><a target="_blank" href="https://nazim725.github.io/Book-Archive/">Live Site Link</a></button>
<button class="display-button"><a target="_blank" href="https://github.com/nazim725/Book-Archive">Github Code Link</a></button>
</div>

  `;
  details.appendChild(div)

}
const showDetails10=()=>{
  const details= document.getElementById('display-details');
  details.textContent='';
  const div=document.createElement('div');
  div.classList.add('show-details')
  div.innerHTML=`
<h1 class="website-title"> Mac Book Pro</h1>
<h3 class="description">This Website is build by Using HTML,CSS,Bootstrap,javaScript,ES6</h4>
<p style="color:white; margin-left:180px"> Promo Code : stevekaku</p>
<div class="button-div">
<button class="display-button"><a target="_blank" href="https://nazim725.github.io/Mac-Book-pro/">Live Site Link</a></button>
<button class="display-button"><a target="_blank" href="https://github.com/nazim725/Mac-Book-pro">Github Code Link</a></button>
</div>

  `;
  details.appendChild(div)

}
const showDetails11=()=>{
  const details= document.getElementById('display-details');
  details.textContent='';
  const div=document.createElement('div');
  div.classList.add('show-details')
  div.innerHTML=`
<h1 class="website-title"> Simple Calculator</h1>
<h3 class="description">This Calculator is build by Using HTML,CSS,Bootstrap,javaScript</h4>
<div class="button-div">
<button class="display-button"><a target="_blank" href="https://nazim725.github.io/Simple-Calculator/">Live Site Link</a></button>
<button class="display-button"><a target="_blank" href="https://github.com/nazim725/Simple-Calculator">Github Code Link</a></button>
</div>

  `;
  details.appendChild(div)

}

// send email from contact form 
function sendmail(){
    
  var name = $('#Name').val();
  var email = $('#Email').val();
  var project = $('#Project').val();
  var message = $('#Message').val();
  var Body='Name: '+name+'<br>Email: '+email+'<br>Project: '+project+'<br>Message: '+message;

  const errorMessage=document.getElementById('display-message');
  errorMessage.style.padding="8px"
  if(!name){
    errorMessage.innerText='Name is missing';
    return;
  }
  if(!email)
  {
    errorMessage.innerText='Email is missing';
    return;
  }
  if(!project)
  {
    errorMessage.innerText='Projects is missing';
    return;
  }
  if(!message)
  {
    errorMessage.innerText='You must Provide your Message';
    return;
  }
  Email.send({
  
    SecureToken:"fbf31702-bb7f-4a4e-9c1c-4ccf17ee777f",
    // SecureToken="20b444a2-b3af-4eb8-bae7-911f6097521c",
    To: 'nazimhabib77@gmail.com',
    From: "c161067@ugrad.iiuc.ac.bd",
    Subject: "New message on contact from "+name,
    Body: Body
  }).then(
    message =>{
      const errorMessage=document.getElementById('display-message');
      errorMessage.style.padding="8px"
      
      if(message=='OK'){
        errorMessage.innerText='Your mail has been send. Thank you for connecting.';
      }
      else{
        errorMessage.innerText='There is error at sending message';
      }

    }
  );
 



}
