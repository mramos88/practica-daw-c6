class User {
  private id: number;
  private nombre: string;
  private email: string;


  constructor(id: number, nombre: string, email: string,dni:number) {
 
    this.id = id;
    this.nombre = nombre;
    this.email = email;
  }



  mostrar(): void {
 
    console.log("id=" + this.id + " nombre=" + this.nombre);
  }

}