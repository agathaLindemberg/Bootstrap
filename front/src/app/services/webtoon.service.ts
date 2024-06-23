import { Injectable } from '@angular/core';
import { Webtoon } from '../webtoon/webtoon';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebtoonService {

  constructor(private http: HttpClient) { }

  salvar(webtoon: Webtoon): Observable<Webtoon> {
    return this.http.post<Webtoon>('http://localhost:8080/api/webtoon', webtoon);
  }

  atualizar(webtoon: Webtoon): Observable<any> {
    return this.http.put<Webtoon>(`http://localhost:8080/api/webtoon/${webtoon.id}`, webtoon);
  }

  deletar(webtoon: Webtoon): Observable<any> {
    return this.http.delete<any>(`http://localhost:8080/api/webtoon/${webtoon.id}`);
  }

  getWebtoon(): Observable<Webtoon[]> {
    return this.http.get<Webtoon[]>('http://localhost:8080/api/webtoon');
  }

  getWebtoonById(id: number): Observable<Webtoon> {
    return this.http.get<any>(`http://localhost:8080/api/webtoon/${id}`);
  }
}
