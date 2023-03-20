window.onload = function(){
    var _URL = window.URL || window.webkitURL;
    document.querySelector("input#image1").onchange = function() {
        let test = document.querySelectorAll("#billboard li div:nth-child(1)");
        let image1 = document.querySelector(".image-picker .image1-prev");
    
        if ((file = this.files[0])){
            image = new Image();
               image.src = _URL.createObjectURL(file);
          }
    
        test.forEach(e =>{
            image1.style.display = "block";
            image1.style.backgroundImage = "url(" + image.src + ")";
            image1.style.backgroundSize = "220px 120px";
            image1.style.width = "220px";
            image1.style.height = "120px";
            image1.style.backgroundPosition = "center";
            e.style.backgroundImage = "url(" + image.src + ")";
            e.style.backgroundSize = "543px 272px";
        })
    }
    document.querySelector("input#image2").onchange = function() {
        let test = document.querySelectorAll("#billboard li div:nth-child(2)");
        let image2 = document.querySelector(".image-picker .image2-prev");
    
        if ((file = this.files[0])){
            image = new Image();
               image.src = _URL.createObjectURL(file);
          }
    
        test.forEach(e =>{
            image2.style.display = "block";
            image2.style.backgroundImage = "url(" + image.src + ")";
            image2.style.backgroundSize = "220px 120px";
            image2.style.width = "220px";
            image2.style.height = "120px";
            image2.style.backgroundPosition = "center";
            e.style.backgroundImage = "url(" + image.src + ")";
            e.style.backgroundSize = "543px 272px";
        })
    }
    document.querySelector("input#image3").onchange = function() {
        let test = document.querySelectorAll("#billboard li div:nth-child(3)");
        let image3 = document.querySelector(".image-picker .image3-prev");
    
        if ((file = this.files[0])){
            image = new Image();
               image.src = _URL.createObjectURL(file);
          }
    
        test.forEach(e =>{
            image3.style.display = "block";
            image3.style.backgroundImage = "url(" + image.src + ")";
            image3.style.backgroundSize = "220px 120px";
            image3.style.width = "220px";
            image3.style.height = "120px";
            image3.style.backgroundPosition = "center";
            e.style.backgroundImage = "url(" + image.src + ")";
            e.style.backgroundSize = "543px 272px";
        })
    }
}