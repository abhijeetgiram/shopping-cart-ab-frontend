import { Injectable } from '@angular/core';
import { Toast } from '../components/toast/toast';

@Injectable({ providedIn: 'root' })
export class ToastService {
  private toast?: Toast;

  register(toast: Toast) {
    this.toast = toast;
  }

  show(
    message: string,
    type: 'success' | 'danger' | 'warning' | 'info' = 'success'
  ) {
    this.toast?.show(message, type);
  }

  hide() {
    this.toast?.hide();
  }
}
