import { Component } from '@angular/core';
import { RouterLinkWithHref, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule, RouterLinkWithHref],
  templateUrl: './navbar-component.html',
  styles: ``,
})
export class NavbarComponent {}
