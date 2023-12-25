function isValidHttpUrl(string) {
    let url;
    
    try {
      url = new URL(string);
    } catch (_) {
      return false;  
    }
  
    return url.protocol === "http:" || url.protocol === "https:";
}

function tryForward() {
    let link = document.getElementById("link-input").value
    if(link && isValidHttpUrl(link)){
        document.getElementById("link-input").classList.remove("wrong-url-input");
        window.location.href = link+"&tag=poker0e-21"; // Hinzufügen meines Amazon PartnerNet Kontos
    }else {
        document.getElementById("link-input").classList.add("wrong-url-input");
    }
}

document.getElementById("go-to-amazon").addEventListener("click", tryForward);