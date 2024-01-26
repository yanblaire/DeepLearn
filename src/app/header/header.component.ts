import { Component } from '@angular/core';
import { SideBarService } from '../../app/side-bar.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isSidebarOpen = this.sideBarService.isSidebarOpen$;
  isProfileOpen = false;

  constructor(private sideBarService: SideBarService) {}

  toggleSidebar() {
    this.sideBarService.toggleSidebar();
  }

  toggleProfile() {
    this.isProfileOpen = !this.isProfileOpen;
  }
}
