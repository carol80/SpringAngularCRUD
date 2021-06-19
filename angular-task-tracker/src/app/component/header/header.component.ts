import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title: string = 'Task-Tracking App!!';
  showAddTask: boolean;
  subscription: Subscription;

  constructor(private uiService: UiService, private router: Router) {
    this.subscription = this.uiService.onToggle().subscribe((val) => (this.showAddTask=val));
  }

  ngOnInit(): void {}
  ToggleAddTask(){
    this.uiService.toggleAddTask();
  }

  getRouter(route: string){
    return this.router.url == route;
  }

}