import { Component } from '@angular/core';
import { Navbar } from "./shared/navbar/navbar";


@Component({
  selector: 'app-root',
  imports: [Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'gearflow-front';
}
