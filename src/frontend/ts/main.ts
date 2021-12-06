declare const M;

class Main implements EventListenerObject, GetResponseLister{
    private nombre: string;
    private lista: Array<User> = new Array();
    private framework: FrameWork = new FrameWork();

    constructor(n:string) {
        this.nombre = n;
        this.framework.requestGET("http://localhost:8000/devices",this)
        console.log(this.nombre);
        let usuario: User = new User(1, "matias", "matias@mail.com",333);
        let usuario1: User = new User(2, "Jose", "jose@mail.com",333);
        let usuario2: User = new User(3, "Martin", "mas@mail.com", 333);
        
   

      
        this.lista.push(usuario);
        this.lista.push(usuario1);
        this.lista.push(usuario2);


       
      
    }

    public handleEvent(ev:Event) {

        let objetoEvento = <HTMLInputElement>ev.target;

        if (ev.type == "click"&&objetoEvento.id=="btn") { 
            console.log("se hizo click!!!!", objetoEvento.id);    
            
        } else if (ev.type == "click" && objetoEvento.id.substring(0, 2) == "ck") {
            let check = objetoEvento.checked;
            let valor = objetoEvento.getAttribute("miAtt");
            console.log("se hizo click en un check!!!!", objetoEvento.id, check, valor);
            
            let datos = { "id": valor, "type": check }
            
            this.framework.requestPost("http://localhost:8000/devices", datos, this);
            alert(JSON.stringify(datos));
            

        }else if (ev.type == "dblclick") {
            this.mostrarUsuarios();
            console.log("Se hizo doble click!!!!")
        }
        
        
        
    }
    public mostrarUsuarios() {
        for (let obj in this.lista) {
            
            this.lista[obj].mostrar();
        }
    }
    public handlerGetResponse(status: number, response: string) {
        let respuestaObjetos: Array<Device> = JSON.parse(response);
        let textArea = this.getElement("textarea_1");
        textArea.innerHTML = response;

        let last_name = <HTMLInputElement>this.getElement("last_name");
        last_name.value = response;
        let lista = this.getElement("lista");
        for (let disp of respuestaObjetos) {
         
           lista.innerHTML+=`<li class="collection-item avatar">
           <img src="./static/images/yuna.jpg" alt="" class="circle">
           <span class="title">${disp.name}</span>
           <p>${disp.description}
           </p>
           <a href="#!" class="secondary-content">
             <div class="switch">
                 <label>
                   Off
                   <input type="checkbox" id="ck_${disp.id}" miAtt="${disp.id}" >
                   <span class="lever"></span>
                   On
                 </label>
               </div>
           </a>
         </li>`
        }

        for (let disp of respuestaObjetos) {
            let checkbox = this.getElement("ck_" + disp.id);
            checkbox.addEventListener("click", this);
        }
    
    }


    public getElement(id: string): HTMLElement{
        
        return document.getElementById(id);
    }



}
window.onload = function inicio() {
    M.AutoInit();
    
    let miObjeto: Main = new Main("matias");
    let boton = miObjeto.getElement("btn");
    boton.addEventListener("click", miObjeto);
  
}




