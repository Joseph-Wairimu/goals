export class Goal {
    static push(goal: any) {
      throw new Error('Method not implemented.');
    }
    static splice(index: any, arg1: number) {
      throw new Error('Method not implemented.');
    }

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
