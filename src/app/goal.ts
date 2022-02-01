export class Goal {

    // id: number;
    // name: string;
    // description: string;
    // constructor(id:number,name: string,description: string){
    //     this.id= id;
    //     this.name=name;
    //     this.description=description;
    // }
    showDescription: boolean;
    constructor(public id: number,public name: string,public description: string,public completeDate: Date){
      this.showDescription=false;
    }
  }
