document.getElementById("addFriendBtn").onclick = function(){

    var request = new XMLHttpRequest();

    request.onreadystatechange = function(){
        if(request.readyState == XMLHttpRequest.DONE ){
            if(request.status == 200){
               var counter=  request.responseText;
                document.getElementById("totalFriendCount").innerText = counter;
                document.getElementById("addFriendBtn").innerText = "Friend request sent";
                document.getElementById("addFriendBtn").disabled = true; 
            }
        }

    };

    request.open("GET","/friend/counter",true);
    request.send(null);
};

window.onload = function(){
 var request = new XMLHttpRequest();

    request.onreadystatechange = function(){
        if(request.readyState == XMLHttpRequest.DONE ){
            if(request.status == 200){
               var counter= request.responseText;
                document.getElementById("totalFriendCount").innerText = counter;
            }
            
        }
       

    };

    request.open("GET","/friend/getCounter",true);
    request.send(null);
}   


