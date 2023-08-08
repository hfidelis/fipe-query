import { Component } from '@angular/core';
import { MessageService } from 'src/app/services/message.service';
import { faXmark, faCircleExclamation, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-message-modal',
  templateUrl: './message-modal.component.html',
  styleUrls: ['./message-modal.component.css']
})
export class MessageModalComponent {

  faXmark: IconDefinition = faXmark;
  faCircleExclamation: IconDefinition = faCircleExclamation;

  constructor (
    public messageService: MessageService
  ) {}
}
