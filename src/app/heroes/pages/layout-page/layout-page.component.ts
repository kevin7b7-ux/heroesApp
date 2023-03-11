import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';
import { User } from 'src/app/auth/interfaces/user.interface';
import { Router } from '@angular/router';
import { AuthorizationService } from '../../../auth/services/authorization.service';
import { Option } from '../../../auth/interfaces/permissions.interface';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styles: [
  ]
})
export class LayoutPageComponent implements OnInit{

  public sidebarItems: Option[] = []

  private authorizationService = inject(AuthorizationService)

  constructor(
    private authService:AuthService,
    private router: Router
    
    ){}
  

  ngOnInit(): void {
    this.sidebarItems = this.getItemsMenu().filter( item => item.type === 'item-menu')
    console.log(this.sidebarItems)
  }    
  get user():User | undefined {
    return this.authService.currentUser
  }

  onLogout(){
    this.authService.logout();
    this.router.navigate(['/auth/login'])
  }

  getItemsMenu(): Option[]{
    let rol = this.authService.currentUser!.rol
    return this.authorizationService.getOptionsByRole( rol )
  }

}
