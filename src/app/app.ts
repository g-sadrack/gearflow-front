import { Component, inject } from '@angular/core';
import { NavbarComponent } from './shared/components/navbar/navbar-component';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { ToastComponent } from './shared/components/toast/toast-component';
import { Searchbar } from './shared/components/searchbar/searchbar';
import { AsyncPipe } from '@angular/common';
import { filter, map, startWith } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [
    NavbarComponent,
    RouterOutlet,
    ToastComponent,
    Searchbar,
    AsyncPipe,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'gearflow-front';

  private router = inject(Router);

  showSearchBar$ = this.router.events.pipe(
    filter((e) => e instanceof NavigationEnd),
    map((e: NavigationEnd) => e.urlAfterRedirects),
    map((url) => ['/listagem-cliente', '/listagem-veiculo'].includes(url)),
    startWith(
      ['/listagem-cliente', '/listagem-veiculo'].includes(this.router.url)
    )
  );
}
