import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FileUploader } from 'ng2-file-upload';
@Component({
  selector: 'app-neighbors',
  templateUrl: './neighbors.component.html',
  styleUrls: ['./neighbors.component.css'],
  providers: [AuthService]
})
export class NeighborsComponent implements OnInit {
neighbors = [];
  constructor(private myAuthService: AuthService) { }

  ngOnInit() {
    this.myAuthService.getNeighborList()
    .subscribe((myNeighborList) =>{
      this.neighbors = myNeighborList;
      console.log(myNeighborList);
    });
  }

}
