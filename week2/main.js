console.log("hi test message");
$(document).ready(function(){
    
    // $("form").submit(function(e) {
    //     e.preventDefault();
    // });
    function validateEmail(email){
        return email.includes('@') && email.includes('.') && email.length>4;
    }
    function validateMessage(message){
        return message.length>5;
    }
    function validateName(name){
        return name.length>2;
    }
    $("button").click(function(event){
        let email= $('.email').val();
        let message=$('.subject').val();
        let name=$('.name').val();
        console.log(message);
        if(validateEmail(email) && validateMessage(message) && validateName(name)){
            $(".result").text(email +" message is " + message + name);
        }
        else{
            console.log(name);
            event.preventDefault();
                console.log("after");
            $(".result").text("Did not success");
        }

    }
    );
});