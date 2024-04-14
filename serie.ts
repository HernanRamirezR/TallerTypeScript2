export class Serie {
    id: number
    name: string;
    plataforma: string;
    temporadas: number;
    resumen: string;
    enlace: string;
    img: string;
  
    constructor(id: number, name: string, plataforma: string, temporadas:number,  resumen:string, enlace:string, img:string) {
      this.id = id
      this.name = name;
      this.plataforma = plataforma;
      this.temporadas=temporadas
      this.resumen = resumen;
      this.enlace = enlace;
      this.img = img
    }
  }
  