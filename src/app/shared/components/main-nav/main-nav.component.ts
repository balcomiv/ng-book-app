import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements OnInit, OnDestroy {
  
  isResponsive = false;

  private subscriptions = new Subscription();

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit() {
    this.subscriptions.add(
        this.breakpointObserver.observe([Breakpoints.Medium, Breakpoints.Large])
      .pipe(
        debounceTime(200)
      )
      .subscribe((result: BreakpointState) => {
        console.log("Result", result);
        if (!result.matches) {
          this.isResponsive = true;
        } else {
          this.isResponsive = false;
        }
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
