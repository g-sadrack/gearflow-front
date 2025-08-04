import { Component } from '@angular/core';
import { NavbarComponent } from "./shared/components/navbar/navbar-component";
import { RouterOutlet } from '@angular/router';
import { ToastComponent } from "./shared/components/toast/toast-component";
import { Searchbar } from "./shared/components/searchbar/searchbar";


@Component({
  selector: 'app-root',
  imports: [NavbarComponent, RouterOutlet, ToastComponent, Searchbar],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'gearflow-front';
}
