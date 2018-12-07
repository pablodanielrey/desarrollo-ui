import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'proyecto-ui';

  @HostBinding('class') componentCssClass;

  ngOnInit() {
    this.componentCssClass = this.obtener_tema();
  }  

  obtener_tema() {
    return localStorage.getItem('tema');
  }


}
