import { Component, inject, Input, OnInit } from '@angular/core';
import { AsignaturasService } from 'src/app/services/asignaturas.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {

  @Input() isModal!: boolean;
  @Input()
  title!: string;


  utilSvc = inject(AsignaturasService);

  ngOnInit() {}

  dismissModal(){
    this.utilSvc.dismissModal();
  }

}
