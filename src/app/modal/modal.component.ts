import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  standalone: true,
  template: `
    <div class="modal-backdrop" (click)="close.emit()">
      <div class="modal-content" (click)="$event.stopPropagation()">
        <h2>{{ title }}</h2>
        <p>{{ content }}</p>
        <button (click)="close.emit()">Fechar</button>
      </div>
    </div>
  `,
  styles: [`
    .modal-backdrop {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1000;
    }
    .modal-content {
      background-color: white;
      padding: 20px;
      border-radius: 5px;
      max-width: 500px;
      width: 90%;
    }
    h2 {
      color: #3498db;
      margin-bottom: 15px;
    }
    button {
      background-color: #3498db;
      color: white;
      border: none;
      padding: 10px 20px;
      border-radius: 5px;
      cursor: pointer;
      font-size: 1em;
      transition: background-color 0.3s;
    }
    button:hover {
      background-color: #2980b9;
    }
  `]
})
export class ModalComponent {
  @Input() title: string = '';
  @Input() content: string = '';
  @Output() close = new EventEmitter<void>();
}