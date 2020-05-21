import { Component, OnInit, NgModule } from '@angular/core';
import {NgForm} from '@angular/forms';


class lecture {

  start_time : string ;
  finish_time : string ;
  lec_flag = 1  ; 

  width : string ;
  collision : boolean  ; 

  constructor (){
    this.start_time = '0' ;
    this.finish_time = '0' ; 
    this.collision = true; 
  }
}

@Component({
  selector: 'app-visualize',
  templateUrl: './visualize.component.html',
  styleUrls: ['./visualize.component.css']
})


export class VisualizeComponent implements OnInit {
 ngOnInit() {
  }

  lectures : lecture[]  ;
  final_lectures : lecture[]  ;
  flag = 1  ; 
  start_time_array= [];
  finish_time_array = [];
   s_time_iput ;
   f_time_input;

    create(){
      // return array of string
      this.start_time_array = this.s_time_iput.split (',');
      this.finish_time_array = this.f_time_input.split (',');

     var length = this.finish_time_array.length;
     this.lectures = new Array(length) ;
      
    for(var i = 0;i<this.lectures.length;i++) { 
      var num1 =  this.start_time_array[i];
      var num2 =  this.finish_time_array[i];
      this.lectures[i]  = new lecture();
      this.lectures[i].start_time = num1;
      this.lectures[i].finish_time = num2;
      this.lectures[i].lec_flag = i+1 ; 
      this.lectures[i].width = ((+num2 - +num1)*60) + "px"; 
    }
    this.bubbleSort() ; 
    console.log(this.lectures)
   
    this.final_lectures = this.display_conflict (this.lectures);
    var timesRun = 0;

    var interval = setInterval(  ()=>{
      console.log(this.flag);
      timesRun += 1;
      this.flag++;

      if(timesRun === 9){
        clearInterval(interval);
    }

    } , 2000 );

  }


  display_conflict(array: lecture[]): lecture[]{
    var last_finished = 0 ;
    var final_array :lecture[] = [] ;
var g = 0 ;
 // construct the optimal solution
 for (let i = 0, last_finished = 0; i < array.length; i++){
    if (+array[i].start_time >= last_finished)    {   
      final_array.push(array[i]);
      final_array[g].collision = false ; 
       last_finished = +array[i].finish_time;
       g++ ; 
    }
 }
    return final_array ; 
  }


  
  bubbleSort() {
    var y = 0 ; 
  for(let i = 0; i < this.lectures.length; i++) {
      for(let j = 0; j < this.lectures.length - 1; j++) {
      
          if( +this.lectures[j].finish_time  > +this.lectures[j + 1].finish_time ) {
              let swap = this.lectures[j];
              this.lectures[j] = this.lectures[j + 1];
              this.lectures[j + 1] = swap;
          }
      }
    }
}


toggleFullScreen() {
  let elem =  document.body; 
  let methodToBeInvoked = elem.requestFullscreen || 
   elem['webkitRequestFullScreen'] || elem['mozRequestFullscreen'] || 
   elem['msRequestFullscreen']; 
  if(methodToBeInvoked) methodToBeInvoked.call(elem);
}


updateTextInput(val) {
  (<HTMLInputElement>document.getElementById("myRange")).innerHTML = val;



  console.log(val);
}



}



