/* thong tin ca nhan an , hien */
document
.getElementById("email-form")
.addEventListener("submit", function (event) {
event.preventDefault();
const emailInput = document.getElementById("email-input").value;
const regex =
/^(([^<>()\[\]\.,;:\s@"]+(.[^<>()\[\]\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z\-0-9]+.)+[a-zA-Z]{2,}))$/;

if (regex.test(emailInput)) {
document.getElementById("personal-info-detail").classList.remove("hide");
document.getElementById("email-form-container").classList.add("hide");
} else {
document.getElementById("error-message").style.display = "block";
}
});

/*view*/
document.querySelectorAll('.view-more-btn').forEach(button=>(
  button.addEventListener('click',function(){
    const content =this.parentElement.nextElementSibling;
    if(content.classList.contains('hide')){
      content.classList.remove('hide');
      this.textContent ='View less';
    }else{
      content.classList.add('hide');
      this.textContent='View more';
    }
  })
))
//chuc nang hien thi nut view more va view less
document.querySelectorAll('.thongtin-nghenghiep>div').forEach(section=>{
  section.addEventListener('mouseenter',function(){
    const button = this.querySelector('.view-more-btn');
    button.style.visibility='visible';
  })
  section.addEventListener('mouseleave',function(){
    const button =this.querySelector('.view-more-btn');
    button.style.visibility='hidden';
  });
});

