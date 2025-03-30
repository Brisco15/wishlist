import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
  firstName: string = "John";
  rollNo: number = 1234;
  isActive: boolean = true;
  currentDate: Date = new Date();
  myPlaceholder: string = "Enter Full name";
  div1ClassName: string = "bg-primary ";
  selectedCity: string = "";


  constructor() {
    console.log(this.firstName, this.rollNo, this.isActive, this.currentDate);

    this.isActive = false;
    console.log(this.isActive)
    
  }

  showwelcomeMessage() {
    alert("Welcome to Angular 19 course");
  }
  onCityChange(){
    console.log("City changed");

  }

}
