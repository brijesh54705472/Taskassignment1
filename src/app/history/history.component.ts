import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  searchText:any;
  numbers = [];
  noOfPages: number;
  cotent: string;
  pageSize: number = 6;
  currentPage: number = 0;
  historys=[];
  keyOfObjects;
  selectedPage: any;
  page:any;
  constructor(private apiService:ApiServiceService) {
  }
  ngOnInit(){
    //Api call through service to access data
    this.apiService.showDetails().subscribe((res)=> {
      // this.historys =res[0].concat(res[1]);
      this.historys=res;
      console.log(this.historys[0])
      this.noOfPages = Math.round(this.historys.length / this.pageSize);
      console.log(this.noOfPages);
      this.numbers = Array(this.noOfPages)
        .fill(0)
        .map((x, i) => i);
    });
      
  }
  
//code for paginations
  setPage(value) {
    this.currentPage = value;
    this.selectedPage=value;
    console.log("value of current one", this.currentPage);
  }
  setPagePrev() {
    console.log("value", this.currentPage);
    if (this.currentPage != 0) {
      console.log("i am here");
      this.currentPage = this.currentPage - 1;
      this.selectedPage=this.currentPage ;
    }
  }
  setPageNext() {
    console.log("value", this.currentPage);
    if (this.currentPage < this.noOfPages - 1) {
      this.currentPage = this.currentPage + 1;
      this.selectedPage=this.currentPage ;
    }
  }

}
