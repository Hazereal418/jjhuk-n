function SendMail(){
    var params = {
        message: document.getElementById("message").value,
    }
    emailjs.send("service_9kqi0uh","template_pk83z08", params).then(document.write("<h1>An Error Occured, Please try again! </h1>")
        
    );
}
