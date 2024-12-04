var contactForm = document.getElementById("contactForm")

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
function submitForm(e){

  var data= Object.fromEntries(formData.entries())
  console.log(data)
  console.log(data.phoneNumber)
  
  var link = document.createElement('a');
  link.href=`mailto:pandurizky17@gmail.com?subject=${data.subject}&body=Selamat pagi, perkenalkan nama saya 
  ${data.name} silahkan hubungi saya di ${data.email} atau ${data.phone}. Skill saya adalah ${data.skill}. 
  Berikut adalah pesan saya : ${data.message}`
  link.click();
}
  var form = e.target;
  var formData = new FormData(form)
})