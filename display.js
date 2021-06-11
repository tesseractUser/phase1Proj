function submitBlog()
{
    /// Reading the form values
      var writer=document.getElementById("user").value;
      var title=document.getElementById("title").value;
      var article=document.getElementById("article").value;
       console.log(writer,title,article);
       //form validations and avoiding form submit if validation fails
      if((writer=="")||(title=="")||(article==""))
      {
         alert("Please fill all the fields");
         
         return false;
      }
      // validation successful
      // Displaying the submitted content
     var newContent=document.createElement("div");
     newContent.setAttribute("style","background-color:lightgrey;width:30%;float:left;margin:1em");

     
       var head=document.createElement("h4");
        head.textContent= writer;

       var topic=document.createElement("h5")
       topic.textContent=title;
       var contents=document.createElement("h6")
       contents.textContent=article;

       //console.log(head,topic,contents);
     newContent.append(head);
     newContent.append(topic);
     newContent.append(contents);
     var remBlog= document.createElement("button");
     var text = document.createTextNode("Delete");
     remBlog.appendChild(text);
     remBlog.addEventListener ("click", function() {
      newContent.remove(this);
    });
     newContent.append(remBlog);
     document.getElementById("blogArea").appendChild(newContent);

     //reset the form values
     document.getElementById("user").value="";
     document.getElementById("title").value="";
     document.getElementById("article").value="";
     return true;
}



