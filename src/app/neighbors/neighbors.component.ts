import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FileUploader } from 'ng2-file-upload';
import { environment } from '../../environments/environment';
@Component({
  selector: 'app-neighbors',
  templateUrl: './neighbors.component.html',
  styleUrls: ['./neighbors.component.css'],
  providers: [AuthService]
})
export class NeighborsComponent implements OnInit {
neighbors = [];
baseUrl = environment.apiBase;
  constructor(private myAuthService: AuthService) { }

  ngOnInit() {
    this.myAuthService.getNeighborList()
    .subscribe((myNeighborList) =>{
      this.neighbors = myNeighborList;
      console.log(myNeighborList);
    });
  }

}
