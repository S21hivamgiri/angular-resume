import { Component, OnInit, HostListener,ElementRef, AfterViewInit } from '@angular/core';
import { Listcard, Accordion } from '../constant';
import { Router,ActivatedRoute } from '@angular/router';

import { HOBBY_DATA } from './../data';

@Component({
  selector: 'app-side-jump-menu',
  templateUrl: './side-jump-menu.component.html',
  styleUrls: ['./side-jump-menu.component.scss']
})
export class SideJumpMenuComponent implements OnInit, AfterViewInit {
  data:Accordion =HOBBY_DATA;
  isMobile:boolean;
  @HostListener('window:resize', ['$event']) isMobileView(event){
    if (event.target.innerWidth < 992)
    this.isMobile= true;
    else this.isMobile= false;
  }

  ngAfterViewInit(){
    const navLinks = this.hostElement.nativeElement.querySelectorAll('.nav-link');
    setTimeout(() => {
    this.route.fragment.subscribe(frag => {
      navLinks.forEach(element => {
        element.classList.remove('active');
        if (element.getAttribute('href') == '#'+frag) {
          element.classList.add('active');
        }
      });
    });
  }, 100);
  }

  navigateUrl(id:string, event:MouseEvent){
    this.router.navigate(['main'], { fragment: id });
    const navLinks = this.hostElement.nativeElement.querySelectorAll('.nav-link');
    let i = 0;

    setTimeout(() => {
    navLinks.forEach(element => {
      element.classList.remove('active');
      if (navLinks.length == ++i) {
        const targetElement = event.target as HTMLElement;
        targetElement.classList.add('active');
      }
    });
  }, 70);
    return false;
  }

  constructor(private router: Router, readonly route: ActivatedRoute, readonly hostElement:ElementRef) { }

  ngOnInit(): void {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    if (screen.width < 992)
      this.isMobile = true;
    else this.isMobile = false;
    this.route.fragment.subscribe(frag=>{
      if(frag){
      let element = this.hostElement.nativeElement.querySelector('#' + frag);
        if (element) element.scrollIntoView();
      }
    });
  }
}
