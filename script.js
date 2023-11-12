function toggleMenu() {
    console.log("clicked")
    var commonShowElements = document.querySelectorAll(".commonShow li");
    var ListItems = document.querySelector(".list-items ");
    var commonShowAnchor = document.querySelectorAll(".list-items li a");

    commonShowElements.forEach(function (element) {
        element.style.display = (element.style.display === 'block') ? "none" : "block"
       
        if (element.style.display === "none") {
           ListItems.style.background = "none" ;
        }else {
            ListItems.style.background = "#dbdada";
           commonShowAnchor.forEach(function (anchor) {
             anchor.style.display = "block";
             anchor.style.color = "#897f7f";
             anchor.style.textDecoration = "none";
             anchor.style.fontSize = "2.2rem";
             anchor.style.marginBottom = "1.4rem";
             anchor.style.cursor = "pointer";
           })
        }
    });
}