class Main{
    private nombre: string;
    private lista: Array<User> = new Array();
    constructor(n:string) {
        this.nombre = n;
        let usuario: User = new User(1, "matias", "matias@mail.com");
        let usuario1: User = new User(2, "Jose", "jose@mail.com");
        let usuario2: User = new User(3, "Martin", "mas@mail.com");
        this.lista.push(usuario);
        this.lista.push(usuario1);
        this.lista.push(usuario2);
        

        for (let obj in this.lista) {
    
            this.lista[obj].mostrarDatos();
        }
      
    }

    public getElement(id: string): HTMLElement{
        
        return document.getElementById(id);
    }



}
window.onload = function inicio() {
    let miObjeto: Main = new Main("matias");
    let boton = miObjeto.getElement("btn");
    boton.textContent = "Texto desde ts";
}




