import { Component } from '@angular/core';
import {fab} from "@fortawesome/free-brands-svg-icons";
import {IconProp} from "@fortawesome/fontawesome-svg-core";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss', '']
})
export class HeaderComponent {
  

  protected readonly fab = fab;
  buttonIconsGithub: IconProp = ['fab', 'github'];
}
