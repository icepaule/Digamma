import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ResultsService {
  getTorResults(query: string) {
    let params = new HttpParams().set("query", query);
    return this.http.get("http://127.0.0.1:9000/searchTor", {params: params});
}
  constructor(private http: HttpClient) { }
}
