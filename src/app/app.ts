import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './common/components/header/header';
import { Toast } from './common/components/toast/toast';
import { ToastService } from './common/services/toast.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Toast],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  @ViewChild('toastRef') toast!: Toast;

  constructor(private toastService: ToastService) {}

  ngAfterViewInit(): void {
    this.toastService.register(this.toast);
  }
}
