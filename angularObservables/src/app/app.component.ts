import { Component, OnInit } from '@angular/core';
import { map ,filter, interval } from 'rxjs';
import { Observable,of,from } from 'rxjs';
import { DataService } from './data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angularObservables';


  constructor(private dataService :DataService){

  }

  // //OBSERVABLE BY CONSTRUCTOR
  // myObservable = new Observable((observer:any)=>{
  //   console.log("Obseravble starts")
  //   setTimeout(()=>{observer.next("1")},1000)
  //   setTimeout(()=>{observer.next("2")},2000)
  //   setTimeout(()=>{observer.next("3")},3000)
  //   // setTimeout(()=>{observer.error(new Error("Something went wrong!!!!!")),("2")},4000)
  //   setTimeout(()=>{observer.next("4")},4000)
  //   setTimeout(()=>{observer.complete()},4000)
  //   // observer.next("1")
  //   // observer.next("2")
  //   // observer.next("3")
  //   // observer.next("4")
  // })

  // //OBSERVABLE BY CREATE METHOD
  // myObservable = Observable.create((observer:any)=>{
  //   console.log("Obseravble starts")
  //   setTimeout(()=>{observer.next("1")},1000);
  // })

  


  
  // transformedObservable = this.myObservable.pipe(map((val:any)=>{
  //   return val*5;
  // }),(filter((val:any)=>{
  //   return val>=30;
  // })))

  // transformedObservable = this.myObservable.pipe(map((val:any)=>{
  //   return val*5;
  // }))

  // filterObservable = this.transformedObservable.pipe(filter((val:any)=>{
  //   return val>=30;
  // }))
 

  // array1=[5,10,20]
  // array2=['a','b','c']
  // // myObservable= of(this.array1,this.array2);
  // myObservable = from(this.array1).pipe(map((val:any)=>{
  //     return val*5;
  //   }),(filter((val:any)=>{
  //     return val>=30;
  //   })))
  
  // ngOnInit(){
  //   this.myObservable.subscribe((val:any)=>{
  //     console.log(val)
  //   },(error:any)=>{
  //     alert(error.message)
  //   },()=>{
  //     console.log("Observable has complete emitting all values")
  //   })
  // }
  counterObservable = interval(1000)
  counterSub: any;

ngOnInit(): void {
}

unsubscribe(){
  this.counterSub.unsubscribe()
} 
subscribe(){
  this.counterSub = this.counterObservable.subscribe((val: any)=>{
    console.log(val)
  })

}

}
