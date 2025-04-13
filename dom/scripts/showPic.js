function showPic(el){
  const source = el.getAttribute('href');
  const placeholder = document.querySelector('#placeholder');
  placeholder.setAttribute('src', source);
}

window.onload = function(){
  // const li = document.querySelectorAll("#imagegallery li a");
  // li.forEach((el) => {
  //   el.onclick = function(e){
  //     showPic(this);
  //     e.preventDefault();
  //     return false;
  //   }
  // });

  const links = document.getElementsByTagName('a');

  for (let i = 0; i < links.length; i++) {
    links[i].addEventListner('click',function(e){
      e.preventDefault();
      showPic(this);
    },false);
  }
}
