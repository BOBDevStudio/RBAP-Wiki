var pagecontentelement = document.getElementById("page-content")

var h = [pagecontentelement.getElementsByTagName("h1"), pagecontentelement.getElementsByTagName("h2"), pagecontentelement.getElementsByTagName("h3"), pagecontentelement.getElementsByTagName("h4"), pagecontentelement.getElementsByTagName("h5")];

var end = 4;

for (on = 0; on <= end; on++) {
  for (key in h[on]) {
    var elementediting = h[on][key];
    var id = elementediting.id;
    if (id) {
      var newelement = document.createElement("a");
      newelement.className = "title-link";
      newelement.href = "#" + id;
      newelement.innerHTML = '<i class=\"fas fa-link\"></i>';
      elementediting.appendChild(newelement);
    };
  };
};
