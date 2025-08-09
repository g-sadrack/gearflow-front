import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { SearchService } from '../../services/search/search-service';

@Component({
  selector: 'app-searchbar',
  imports: [ReactiveFormsModule],
  templateUrl: './searchbar.html',
  styleUrl: './searchbar.css'
})
export class Searchbar {
  inputCtrl = new FormControl('');

  constructor(private search: SearchService) {
    this.inputCtrl.valueChanges.subscribe(value => {
      this.search.setTerm(value ?? '');
    });
  }
}
