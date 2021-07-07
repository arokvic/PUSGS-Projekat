import { Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms'
import { MenuItem } from './menu-item';
import { Router, RouterLink }  from '@angular/router';
import { LoginService } from './services/login.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Console } from 'node:console';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'PUSGSprojekat';
  isAdmin:boolean = true;
  isLogged:boolean = true;
  menuItemsLogged: MenuItem[] = [
    {
      label: 'Home',
      icon: 'home',
      showOnMobile: true,
      showOnTablet: true,
      showOnDesktop: true
      
    },
    {
      label: 'Profile',
      icon: 'people',
      showOnMobile: true,
      showOnTablet: true,
      showOnDesktop: true
    },
    {
      label: 'Dashboard',
      icon: 'dashboard',
      showOnMobile: true,
      showOnTablet: true,
      showOnDesktop: true
    },  
    {
      label: 'Showcase',
      icon: 'slideshow',
      showOnMobile: true,
      showOnTablet: true,
      showOnDesktop: true
    },
    {
      label: 'Blog',
      icon: 'rss_feed',
      showOnMobile: true,
      showOnTablet: true,
      showOnDesktop: true
    },
    {
      label: 'Switching plan',
      icon: 'developer_board',
      showOnMobile: true,
      showOnTablet: true,
      showOnDesktop: true
    },
    {
      label: 'Safety document',
      icon: 'developer_board',
      showOnMobile: true,
      showOnTablet: true,
      showOnDesktop: true
    },
    {
      label: 'Work request',
      icon: 'developer_board',
      showOnMobile: true,
      showOnTablet: true,
      showOnDesktop: true
    },
    {
      label: 'Notifications',
      icon: 'notification',
      showOnMobile: true,
      showOnTablet: true,
      showOnDesktop: true
    },
    {
      label: 'Settings',
      icon: 'settings',
      showOnMobile: true,
      showOnTablet: true,
      showOnDesktop: true
    },
    {
      label: 'Consumer',
      icon: 'consumers',
      showOnMobile: true,
      showOnTablet: true,
      showOnDesktop: true
    },
  
    {
      label: 'Logout',
      icon: 'sentiment_very_dissatisfied',
      showOnMobile: true,
      showOnTablet: true,
      showOnDesktop: true
    }
  ]

  menuItemsAdmin: MenuItem[] = [
    {
      label: 'Home',
      icon: 'home',
      showOnMobile: true,
      showOnTablet: true,
      showOnDesktop: true
      
    },
    {
      label: 'Profile',
      icon: 'people',
      showOnMobile: true,
      showOnTablet: true,
      showOnDesktop: true
    },
    {
      label: 'Dashboard',
      icon: 'dashboard',
      showOnMobile: true,
      showOnTablet: true,
      showOnDesktop: true
    },  
    {
      label: 'Showcase',
      icon: 'slideshow',
      showOnMobile: true,
      showOnTablet: true,
      showOnDesktop: true
    },
    {
      label: 'Blog',
      icon: 'rss_feed',
      showOnMobile: true,
      showOnTablet: true,
      showOnDesktop: true
    },
    {
      label: 'Switching plan',
      icon: 'developer_board',
      showOnMobile: true,
      showOnTablet: true,
      showOnDesktop: true
    },
    {
      label: 'Safety document',
      icon: 'developer_board',
      showOnMobile: true,
      showOnTablet: true,
      showOnDesktop: true
    },
    {
      label: 'Work request',
      icon: 'developer_board',
      showOnMobile: true,
      showOnTablet: true,
      showOnDesktop: true
    },
    {
      label: 'Notifications',
      icon: 'notification',
      showOnMobile: true,
      showOnTablet: true,
      showOnDesktop: true
    },
    {
      label: 'Settings',
      icon: 'settings',
      showOnMobile: true,
      showOnTablet: true,
      showOnDesktop: true
    },
    {
      label: 'Consumer',
      icon: 'consumers',
      showOnMobile: true,
      showOnTablet: true,
      showOnDesktop: true
    },
  
    {
      label: 'Requests',
      icon: 'requests',
      showOnMobile: true,
      showOnTablet: true,
      showOnDesktop: true
    },
    {
      label: 'Logout',
      icon: 'sentiment_very_dissatisfied',
      showOnMobile: true,
      showOnTablet: true,
      showOnDesktop: true
    }
  ]

  menuItems: MenuItem[] = [
    {
      label: 'Home',
      icon: 'home',
      showOnMobile: true,
      showOnTablet: true,
      showOnDesktop: true
      
    },
    {
      label: 'Register',
      icon: 'assignment_ind',
      showOnMobile: true,
      showOnTablet: true,
      showOnDesktop: true
      
    },
    {
      label: 'Log in',
      icon: 'login',
      showOnMobile: true,
      showOnTablet: true,
      showOnDesktop: true
    }
  ];

  constructor(private jwtHelper: JwtHelperService,private router: Router,private loginService: LoginService) {}

  ngOnInit(): void {
    const token: string = localStorage.getItem("jwt")!;
    if (token && !this.jwtHelper.isTokenExpired(token)) {
        this.isLogged = true;
        console.log("logovan");  
    }
    else {
      this.isLogged = false;
      console.log("nije logovan");

    }
      const type = localStorage.getItem("type");
      if(type === 'Admin'){
        this.isAdmin =  true;
      }else{
        this.isAdmin = false;
      }
    

  }

  clickMenuItem(menuItem : MenuItem){
    console.log(menuItem);
    if(menuItem.label ==='Register')
    {
      this.router.navigate(['/register']);
    }
    if(menuItem.label ==='Log in')
    {
      this.router.navigate(['/login']);
    }
    if(menuItem.label ==='Home')
    {
      this.router.navigate(['/home']);
    }
    if(menuItem.label ==='Dashboard')
    {
      this.router.navigate(['/dashboard']);
    }
    if(menuItem.label ==='Profile')
    {
      this.router.navigate(['/profile']);
    }
    
  
}
clickMenuItem1(menuItem : MenuItem){
  console.log(menuItem);
  if(menuItem.label ==='Register')
    {
      this.router.navigate(['/register']);
    }
    if(menuItem.label ==='Log in')
    {
      this.router.navigate(['/login']);
    }
    if(menuItem.label ==='Home')
    {
      this.router.navigate(['/home']);
    }
  if(menuItem.label ==='Dashboard')
  {
    this.router.navigate(['/dashboard']);
  }
  if(menuItem.label ==='Profile')
  {
    this.router.navigate(['/profile']);
  }
  
}

clickMenuItem2(menuItemsLogged : MenuItem){
  console.log(menuItemsLogged);
  if(menuItemsLogged.label ==='Register')
  {
    this.router.navigate(['/register']);
  }
  if(menuItemsLogged.label ==='Log in')
  {
    this.router.navigate(['/login']);
  }
  if(menuItemsLogged.label ==='Home')
  {
    this.router.navigate(['/home']);
  }
  if(menuItemsLogged.label ==='Dashboard')
  {
    this.router.navigate(['/dashboard']);
  }
  if(menuItemsLogged.label ==='Profile')
  {
    this.router.navigate(['/profile']);
  }
  if(menuItemsLogged.label ==='Switching plan')
  {
    this.router.navigate(['/switching-plans']);
  }
  if(menuItemsLogged.label ==='Work request')
  {
    this.router.navigate(['/work-requests']);
  }
  if(menuItemsLogged.label ==='Safety document')
  {
    this.router.navigate(['/safety-documents']);
  }
  if(menuItemsLogged.label ==='Notifications')
  {
    this.router.navigate(['/notifications']);
  }
  if(menuItemsLogged.label ==='Settings')
  {
    if(this.isAdmin){
    this.router.navigate(['/admin-settings']);
    }else{
      this.router.navigate(['/settings']);

    }
  }
  if(menuItemsLogged.label ==='Consumer')
  {
    this.router.navigate(['/consumers']);
  }

  if(menuItemsLogged.label ==='Logout')
  {
    this.logOut();
  }
  

}

clickMenuItem3(menuItemsLogged : MenuItem){
  console.log(menuItemsLogged);
  if(menuItemsLogged.label ==='Register')
  {
    this.router.navigate(['/register']);
  }
  if(menuItemsLogged.label ==='Log in')
  {
    this.router.navigate(['/login']);
  }
  if(menuItemsLogged.label ==='Home')
  {
    this.router.navigate(['/home']);
  }
  if(menuItemsLogged.label ==='Dashboard')
  {
    this.router.navigate(['/dashboard']);
  }
  if(menuItemsLogged.label ==='Profile')
  {
    this.router.navigate(['/profile']);
  }
  if(menuItemsLogged.label ==='Switching plan')
  {
    this.router.navigate(['/switching-plans']);
  }
  if(menuItemsLogged.label ==='Work request')
  {
    this.router.navigate(['/work-requests']);
  }
  if(menuItemsLogged.label ==='Safety document')
  {
    this.router.navigate(['/safety-documents']);
  }
  if(menuItemsLogged.label ==='Notifications')
  {
    this.router.navigate(['/notifications']);
  }
  if(menuItemsLogged.label ==='Settings')
  {
    if(this.isAdmin){
    this.router.navigate(['/admin-settings']);
    }else{
      this.router.navigate(['/settings']);

    }
  }
  if(menuItemsLogged.label ==='Consumer')
  {
    this.router.navigate(['/consumers']);
  }

  if(menuItemsLogged.label ==='Requests')
  {
    this.router.navigate(['/requests']);
  }

  if(menuItemsLogged.label ==='Logout')
  {
    this.logOut();
  }
}
logOut(): void {

  this.loginService.logOut();
  this.isAdmin = false;
  this.isLogged = false;

  }
}

