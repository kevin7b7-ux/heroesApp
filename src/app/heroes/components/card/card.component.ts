import { Component, Input, OnInit, inject } from '@angular/core';
import { Hero } from '../../interfaces/hero.interface';
import { AuthorizationService } from '../../../auth/services/authorization.service';
import { AuthService } from '../../../auth/services/auth.service';
import { Option } from '../../../auth/interfaces/permissions.interface'

@Component({
  selector: 'heroes-hero-card',
  templateUrl: './card.component.html',
  styles: [
  ]
})
export class CardComponent implements OnInit{

  @Input()
  public hero!:Hero;

  private authorizationService = inject(AuthorizationService)
  private authService = inject(AuthService)
  private currentUser = this.authService.currentUser
  
  public actions: Option[]= []



  ngOnInit(): void {
    if( !this.hero ) throw Error('Hero property is required')
    this.actions = this.getActionsCard()
  }

  getActionsCard(): Option[]{
    return this.authorizationService.getOptionsByRole( this.currentUser!.rol ).filter( options => options.type === 'card-action' )
  }
}
