import { AfterViewInit, Component} from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit {
  private typed: Typed;

  ngAfterViewInit() {
    this.typed = new Typed('.text', {
      strings: ['Computer Engineer', 'Frontend Developer', 'Web Developer'],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      loop: true
    });
  }

   ngOnDestroy() {
    this.typed.destroy();
  }
  
}
