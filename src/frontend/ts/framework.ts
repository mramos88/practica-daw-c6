class FrameWork{

  public requestGET(url: string,lister:GetResponseLister) {
    let xml = new XMLHttpRequest();

        xml.onreadystatechange = function respustaServidor() {            
            if (xml.readyState == 4) {
              lister.handlerGetResponse(xml.status, xml.responseText);
            }
        }
      
        xml.open("GET",url, true);
        xml.send();
  }

  public requestPost(url: string,datos:any, lister: GetResponseLister) {
    let xml = new XMLHttpRequest();

        xml.onreadystatechange = function respustaServidor() {            
            if (xml.readyState == 4) {
              lister.handlerGetResponse(xml.status, xml.responseText);
            }
        }
      
        xml.open("POST", url, true);
        xml.setRequestHeader("Content-Type", "application/json");
        xml.send(JSON.stringify(datos));
  }
}