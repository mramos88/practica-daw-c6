class Main implements EventListenerObject{
    private nombre: string;
    private lista: Array<User> = new Array();

    constructor(n:string) {
        this.nombre = n;
        console.log(this.nombre);
        let usuario: User = new User(1, "matias", "matias@mail.com",333);
        let usuario1: User = new User(2, "Jose", "jose@mail.com",333);
        let usuario2: User = new User(3, "Martin", "mas@mail.com", 333);
        
   

      
        this.lista.push(usuario);
        this.lista.push(usuario1);
        this.lista.push(usuario2);


       
      
    }

    public handleEvent(ev:Event) {


        if(ev.type=="click"){
            console.log("se hizo click!!!!", this.nombre);    
            this.consultarDisp();
            

        } else if (ev.type == "dblclick") {
            this.mostrarUsuarios();
            console.log("Se hizo doble click!!!!")
        }
        
        
        
    }
    public mostrarUsuarios() {
        for (let obj in this.lista) {
            
            this.lista[obj].mostrar();
        }
    }

    public consultarDisp(): void{
        let xml = new XMLHttpRequest();

        xml.onreadystatechange = function respustaServidor() {            
            if (xml.readyState == 4) {
                if (xml.status == 200) {
                    let resputaString = xml.responseText;
                    let respuestaObjetos:Array<Device> = JSON.parse(resputaString);
                    for (let disp of respuestaObjetos) {
                     
                        console.log(disp.name,disp.state);
                    }
                } else {
                    alert("Algo salio mal");
                }
            }
        }
      
        xml.open("GET", "http://localhost:8000/devices", true);
        xml.send();
 
    }

    public getElement(id: string): HTMLElement{
        
        return document.getElementById(id);
    }



}
window.onload = function inicio() {
    let miObjeto: Main = new Main("matias");
    let boton = miObjeto.getElement("btn");
    boton.addEventListener("click", miObjeto);
    
}




