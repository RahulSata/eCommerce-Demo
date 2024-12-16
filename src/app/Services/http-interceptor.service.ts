import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Ingredient } from 'src/Model/ingredient.model';
import { SweetCount } from 'src/Model/sweetcount.model';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService {

  constructor(private http: HttpClient) { }

  calculateMaxSweets(ingredient: Ingredient): Observable<SweetCount>{
    return this.http.post<SweetCount>('http://localhost:7137/SweetMaker', ingredient).pipe();
  }
}
