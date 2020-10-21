import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-payloads',
  templateUrl: './payloads.component.html',
  styleUrls: ['./payloads.component.css']
})
export class PayloadsComponent implements OnInit {
  searchText: string = "";
  numbers = [];
  noOfPages: number;
  cotent: string;
  pageSize: number = 7;
  currentPage: number = 0;
  selectedPage:number;
  page:number;
  payloads=[];
  keyOfObjects;
  constructor(private apiService:ApiServiceService) {
  }
  ngOnInit(){

    //Api call through service to access data
    this.apiService.showPayloads().subscribe((res)=> {
      this.payloads =res;
      console.log(this.payloads)
      this.noOfPages = Math.round(this.payloads.length / this.pageSize);
      console.log(this.noOfPages);
      this.numbers = Array(this.noOfPages)
        .fill(0)
        .map((x, i) => i);
    });
      
  }
  //code for pagination

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
