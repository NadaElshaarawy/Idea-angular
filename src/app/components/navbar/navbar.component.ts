import { Component, OnInit } from '@angular/core';
import { AuthService } from '@app/services/auth.service';
import { MenuItem } from 'primeng/api/menuitem';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  items: MenuItem[] =[{
    label: 'Home',
    routerLink:"/",
    icon:"fa fa-home"
  },
  {
    label: 'users',
    routerLink:"/users",
  },
  {
    label: 'ideas',
    routerLink:"/ideas",
  }
]
  constructor( public authService : AuthService) { }

  ngOnInit(): void {
  }

}
