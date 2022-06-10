function sendMail(){
    
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const phoneno = document.querySelector('#phoneno').value;
    const message = document.querySelector('#message').value;

    //console.log("Details: ",name,email,phoneno,message);

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "ashutoshgiri1803@gmail.com",
        Password : "824AB621265B60FA0E0102D52B845E206CE9",
        To : 'ashutoshgiri1803@gmail.com',
        From : 'ashutoshgiri1803@gmail.com',
        Subject : "😇Someone Contact on Your Portfolio Website.",
        Body :  `Name: ${name} \nEmail: ${email} \nPhone Number: ${phoneno} \nMessage: ${message}`,
    })
    .then(response => {
        if(response=="OK"){
            alert("😃📩Mail Sent Successfully!");
        }
        else{
            alert("😢Error! Mail Not Sent");
        }
    })
}


document.querySelector('form').addEventListener('submit',sendMail);
