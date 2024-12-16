import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/Model/ingredient.model';
import { SweetCount } from 'src/Model/sweetcount.model';
import { HttpInterceptorService } from 'src/app/Services/http-interceptor.service';

@Component({
  selector: 'app-sweet-maker',
  templateUrl: './sweet-maker.component.html',
  styleUrls: ['./sweet-maker.component.scss']
})
export class SweetMakerComponent implements OnInit {

  constructor(private sweetMakerService: HttpInterceptorService) { }
  ingredients = '';
  splitResult: number[] = [];
  ingredient: Ingredient | undefined; 
  sweetCount: SweetCount = {
    gulabJamunCount : 0,
    chocolatePanCakeCount : 0
  };
  ngOnInit(): void {
    
  }

  calculateMaxSweets(): void{
    this.splitResult = this.ingredients.split(',').map(Number);
    
    this.ingredient = {
      purposeFlour: this.splitResult[0],
      chocolate: this.splitResult[1],
      oil: this.splitResult[2],
      milk: this.splitResult[3],
      sugar: this.splitResult[4]
    }

    this.sweetMakerService.calculateMaxSweets(this.ingredient).subscribe(
      (data) => {
        this.sweetCount = data;
      },
      (error) => {
        console.error(error);
      }
    );


  }
}
