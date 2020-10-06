import {Component, HostListener, OnDestroy, OnInit} from '@angular/core'

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('unloaded')
  ngOnDestroy(): void {
    console.log('Destroyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy')
  }

}
