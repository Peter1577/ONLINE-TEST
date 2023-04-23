import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';
import { Quiz } from '../quiz';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
})
export class QuizComponent implements OnInit {
  question :any | Quiz[];
  presentquestion :any| Quiz;
  presentquestionindex: number = 0;
  selectedAnswer : number|null = null  ;
  answered : boolean = false;
  isLastQuestion:boolean = false;
  isCorrect:any| boolean ;
  showResultsButton:boolean = true;
  score:number = 0;
  showResetButton = false;

  constructor(private DS: DataserviceService , private router:Router) {}
  ngOnInit(): void {
    this.question = [];

    this.DS.quizdata().subscribe({
      next: (res) => {
        this.question = res;

        console.log('quiz data :' + this.question);
        this.presentquestion = this.question[this.presentquestionindex];
        console.log(this.presentquestion);

        console.log('present question :' + this.presentquestion.choices);
      },

      error: (err) => console.log(err),
    });
  }

  answer(answerindex : number):void{
    if(!this.answered) {
      this.selectedAnswer = answerindex;
    }
  }


  nextquestion():void{
   if(this.presentquestionindex === this.question.length -1){
    this.isLastQuestion = true;
    this.showResetButton = false;
   }
   else{
    this.presentquestionindex++;
    this.presentquestion = this.question[this.presentquestionindex];
    this.selectedAnswer= null;
    this.answered = false;
   }
  }

  validateanswer() {
    this.isCorrect = false;
    this.showResetButton = false;
    if(this.selectedAnswer === this.presentquestion.answer){

      this.score ++;    
      

      console.log(this.score);
      
  }
  this.answered =true;
}

reset():void{
  this.router.navigate(['/signup'])

}
}

