import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DrinkType } from '../types/drinks.types.component';
import { DrinkFilterType } from '../types/drinks-filter.type';

@Injectable({
  providedIn: 'root'
})
export class DrinksService {

  private apiUrl = 'http://localhost:3000/Drinks';

  constructor(private http: HttpClient) {}

  public getListaBebidas(filtroBebida?: DrinkFilterType): Observable<DrinkType[]> {
    let params = new HttpParams();
    if (filtroBebida) {
      Object.entries(filtroBebida).map(([key, value]) => {
        if (String(value).trim().length === 0) {
          return;
        }
        params = params.set(key, value);
      });
    }

    return this.http.get<DrinkType[]>(this.apiUrl, { params });
  }
}

