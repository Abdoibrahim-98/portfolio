import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
    sections = [
        { href: '#home', label: 'Home' },
        { href: '#about', label: 'About' },
        { href: '#services', label: 'Services' },
        { href: '#skills', label: 'Skills' },
        { href: '#projects', label: 'Projects' },
        { href: '#contact', label: 'Contact' }
      ];

      ngOnInit(): void {
      }

      
    
      activeSection: string = '#home';
      isOffcanvasOpen = false;
    
      setActiveSection(href: string) {
        this.activeSection = href
      }

      toggleOffcanvas() {
        this.isOffcanvasOpen = !this.isOffcanvasOpen;
      }
}
