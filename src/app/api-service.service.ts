import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { forkJoin, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  
  constructor(private http: HttpClient) { }
// Function to show details.
// showDetails(): Observable<any> { 
//   let a=this.http.get("https://api.spacexdata.com/v3/history");
//   let b= this.http.get("https://api.spacexdata.com/v3/payloads");
//   return forkJoin([a,b]);
  
// }
//Api call to fetch history details
showDetails(): Observable<any> { 
return this.http.get("https://api.spacexdata.com/v3/history");
  
  
}
//API call to fetch payloads details
showPayloads():Observable<any>{
  return this.http.get("https://api.spacexdata.com/v3/payloads");

}

}
