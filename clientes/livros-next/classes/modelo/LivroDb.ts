export class LivroDb {
    
    private id?:string
    private _codEditora?:number=0;
    private _título?: string='';
    private _resumo?: string='';
    private _autores?:string[]=[];

    constructor(codigo?: string,codEditora?:number, 
                 título?: string, resumo?: string,autores?:string[]) {
        
        this.id = codigo;
        this._codEditora=codEditora;
        this._título = título;
        this._resumo = resumo;
        this._autores = autores
    } 

    public set _id(value:string){
      this.id =value
  }

    public get _id():string{
        return this.id? this.id :'';
    }     
    public get codEditora():number{
        return this._codEditora? this._codEditora :0;
    }
    public get titulo(): string {
        return this._título? this._título :'';
      }

    public get resumo(): string {
        return this._resumo? this._resumo :'';
      }

    public get autores(): string[] {
        return this._autores?this._autores:[];
      }

}




 