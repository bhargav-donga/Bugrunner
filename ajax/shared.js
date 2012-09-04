/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
function getShared(){
    if(document.getElementById('assigned_u').value=='' ||document.getElementById('assigned_u').value==null ){
        alert('Select assignee first.');
        return false;
    }
    var xx;
    var projects='',teams='',users='',send='checked=0',exclude='&exclude='+document.getElementById('assigned_u').value;
    if(document.forms["bug"]["security"].value=="shared"){ 
         
        
        var len=document.bug.length;
        for(var cnt=0;cnt<len;cnt++){
       
            if(document.forms.bug.elements[cnt].name=="s_project"){
                if(document.forms.bug.elements[cnt].checked==true){
                    send='checked=1'
       
                    projects=projects+"&project="+document.forms.bug.elements[cnt].value;
       
                }
            }       
            if(send=="checked=1" && projects != ""){
                if(document.forms.bug.elements[cnt].name=="s_team"){
                    if(document.forms.bug.elements[cnt].checked==true){       
                        teams=teams+"&team="+document.forms.bug.elements[cnt].value;
       
                    }
                }    
    
            }
            if(send=="checked=1" && teams != "" && projects != ""){
                if(document.forms.bug.elements[cnt].name=="s_user"){
                    if(document.forms.bug.elements[cnt].checked==true){
                        users=users+"&user="+document.forms.bug.elements[cnt].value;
       
                    }
                }    
    
            }   


        }   
        var httpres;
        if(window.XMLHttpRequest){
            httpres=new XMLHttpRequest();
        }else{
            httpres=new ActiveXObject("Microsoft.XMLHTTP")
        }
        httpres.open("POST","/cgi-bin/getshared.cgi",true);
        httpres.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        httpres.onreadystatechange=function(){
            if(httpres.readyState==4 && httpres.status==200){
                document.getElementById("shared").style.height="190px";
                document.getElementById("shared").style.marginTop="20px";
           $("#shared").html(httpres.responseText);
             }
        }
        httpres.send(send+projects+teams+users+exclude);    
    }
    else{
        document.getElementById("shared").style.height="0px";
        document.getElementById("shared").style.marginTop="0px";
    $("#shared").html('');
            }
    return true;
}

function getUser(){
    var project='',team='';
    var x=document.getElementById("assigned_p").value;
    if(x!='' && x !=null){
    
        project=project+"&project="+x;
    }
    var httpres;
    if(window.XMLHttpRequest){
        httpres=new XMLHttpRequest();
    }else{
        httpres=new ActiveXObject("Microsoft.XMLHTTP")
    }

    httpres.onreadystatechange=function(){
        if(httpres.readyState==4 && httpres.status==200){
            if(team==''){
                $("#assigned_t").html(httpres.responseText);
            }
            else{
                $("#assigned_u").html(httpres.responseText);
            }
       
   
            var y=document.getElementById("assigned_t").value;
            if(y!='' && y !=null){
                team=team+"&team="+y;
            }
            if(window.XMLHttpRequest){
                httpres=new XMLHttpRequest();
            }else{
                httpres=new ActiveXObject("Microsoft.XMLHTTP")
            }

            httpres.onreadystatechange=function(){
                if(httpres.readyState==4 && httpres.status==200){
                    if(team==''){
                        $("#assigned_t").html(httpres.responseText);
                    }
                    else{
                        $("#assigned_u").html(httpres.responseText);
                    }
       
                }
  
            }
            httpres.open("GET","/cgi-bin/getuser.cgi?checked=1"+project+team,true)
            httpres.send(); 
        }
    }
    httpres.open("GET","/cgi-bin/getuser.cgi?checked=1"+project+team,true)
    httpres.send(); 


}
function clearElse(){
    $("#assigned_t").html('');
    $("#assigned_u").html('');
            
    
}
function clearUsers(){
   $("#assigned_u").html(httpres.responseText);
            
    var project='',team='';
    var x=document.getElementById("assigned_p").value;
    if(x!='' && x !=null){
    
        project=project+"&project="+x;
    }
    var y=document.getElementById("assigned_t").value;
    if(y!='' && y !=null){
        team=team+"&team="+y;
    }
    var httpres;
    if(window.XMLHttpRequest){
        httpres=new XMLHttpRequest();
    }else{
        httpres=new ActiveXObject("Microsoft.XMLHTTP")
    }

    httpres.onreadystatechange=function(){
        if(httpres.readyState==4 && httpres.status==200){
            if(team==''){
            $("#assigned_t").html(httpres.responseText);
            }
            else{
            $("#assigned_u").html(httpres.responseText);
            }
       
        }
  
    }
    httpres.open("GET","/cgi-bin/getuser.cgi?checked=1"+project+team,true)
    httpres.send(); 



}




