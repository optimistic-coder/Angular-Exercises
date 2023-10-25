import { Component } from '@angular/core';
import { ApiService } from './api.service';
@Component({
  selector: 'app-git-profile-viewer',
  templateUrl: './git-profile-viewer.component.html',
  styleUrls: ['./git-profile-viewer.component.css']
})

export class GitProfileViewerComponent {
  public data: any = {
    name:'',
    login:'',
    company:'',
    avatar_url:''
  }
  usrnme :string = ''
  loading:boolean = false
  constructor(private apiService: ApiService) { }
  
  submit(){
    this.loading = true
    this.apiService.fetchData(this.usrnme).subscribe(res=>{
      console.log("3434",res)
      this.data = res
      this.loading = false
    })
  }

}
