export class Quote {
  // id: number;
  // name: string;
  // description: string;
  // author: string;
  // public showDescription: boolean;

  // constructor(id: number, name: string, description: string, author: string) {
  //   this.showDescription = false;
  //   this.id = id;
  //   this.name = name;
  //   this.description = description;
  //   this.author = author;
  // }


  constructor(public  theQuote: string,public author: string,public postDate: Date ,public name:string){
      
  }
}
