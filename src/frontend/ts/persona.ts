class Persona {
  private dni: number;

  constructor(dni: number) {
    this.dni = dni;
  }

  public mostrar(): void{
    
    console.log(`Soy una persona y mi dni es   + this.dni`);
  }
}