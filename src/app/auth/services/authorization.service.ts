import { Injectable } from '@angular/core';
import { Permissions } from '../interfaces/permissions.interface';
import { Option } from '../interfaces/permissions.interface';
import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class AuthorizationService {

    private userPermits: Permissions[] = environment.permissions

    getOptionsByRole( rol:string ): Option[]{
        let options:Option[]=[]
         this.userPermits.forEach(element => {

            if (element.rol === rol){
                options = element.options
                return;
            }  
        });
        return options;
    }

    getRoutesByRole( rol: string ): string[]{
        let routes: string[] = [];
        let options = this.getOptionsByRole(rol)
            options.map( o => {
                routes.push(o.url)
            }) 
        return routes;

    }

 

}