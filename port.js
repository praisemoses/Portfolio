let btn = document.getElementById("btn");
btn.addEventListener("click", function() {
    e.preventDefault() 
    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    let body =  "name:" + name + "<br/> phone:" + phone + "<br/> email:" + email + "<br/> message:" + message;

    Email.send({
        Host : "smtp.gmail.com",
        Username : "praisemoses659@gmail.com",
        Password : "clfqwxbezarubqum",
        To : "praisemoses659@gmail.com",
        From : email,
        Subject : phone,
        Body : body
    }).then(
      message => alert(message)
    );
});
