import { Component } from '@angular/core';
import { ToastService } from '../../services/toast/toast-services';

@Component({
  selector: 'app-toast',
  imports: [],
  templateUrl: './toast-component.html',
  styles: '',
})
export class ToastComponent {
  mensagem: string = '';
  mostrar: boolean = false;

  constructor(private toastService: ToastService) {}

  ngOnInit() {
    this.toastService.toastState$.subscribe((msg: string) => {
      this.mensagem = msg;
      this.mostrar = true;
      setTimeout(() => {
        this.mostrar = false;
      }, 3000);
    });
  }
}
