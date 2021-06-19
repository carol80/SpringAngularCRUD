import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
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
