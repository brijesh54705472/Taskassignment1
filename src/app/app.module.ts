import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { Pagination } from "./pagination.pipes";
import { SearchFilterPipe } from "./search.pipes";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
// import { ApiServiceService } from './api-service.service';
import { HttpClientModule } from '@angular/common/http';
import { PayloadsComponent } from './payloads/payloads.component';
import { HistoryComponent } from './history/history.component';

@NgModule({
  declarations: [AppComponent, Pagination, SearchFilterPipe, PayloadsComponent, HistoryComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule,HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
