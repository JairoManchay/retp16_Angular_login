import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AuthenticacionService } from 'src/app/services/authenticacion.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, public autenticacion: AuthenticacionService) {}

  usuariologueado = false;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.usuariologueado = this.autenticacion.isLoggedIn('');
    this.autenticacion.cambioLogeadoStatus$.subscribe(
      (loggedSatus: boolean) => this.usuariologueado = loggedSatus
    );
  }

  logout(){
    alert("Te deslogueaste");
    this.autenticacion.logout();
  }

}
