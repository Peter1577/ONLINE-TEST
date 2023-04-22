export class Quiz {

    question:string;
    choices :string[];
    answer : number;
    

    constructor(question:string,choices:string[],answer:number){
        this.question = question;
        this.choices = choices;
        this.answer=answer;
        
    }

}



