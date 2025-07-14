import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-toast',
  standalone: true,
  template: `
    <div
      class="toast-container position-fixed top-0 end-0 p-3"
      style="z-index: 9999"
    >
      <div
        class="toast align-items-center text-bg-{{ type }} border-0"
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
        [class.show]="visible"
        [class.hide]="!visible"
      >
        <div class="d-flex">
          <div class="toast-body">{{ message }}</div>
          <button
            class="btn-close btn-close-white me-2 m-auto"
            (click)="hide()"
          ></button>
        </div>
      </div>
    </div>
  `,
})
export class Toast {
  @Input() message = '';
  @Input() type: 'success' | 'danger' | 'warning' | 'info' = 'success';
  visible = false;

  show(
    message: string,
    type: 'success' | 'danger' | 'warning' | 'info' = 'success'
  ) {
    this.message = message;
    this.type = type;
    this.visible = true;
    setTimeout(() => this.hide(), 3000);
  }

  hide() {
    this.visible = false;
  }
}
