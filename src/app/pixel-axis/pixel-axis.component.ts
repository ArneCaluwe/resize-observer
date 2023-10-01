import {
  Component,
  NgZone,
  OnInit,
  ViewContainerRef,
  inject,
} from '@angular/core';
import {
  Observable,
  ReplaySubject,
  Subject,
  debounceTime,
  map,
  tap,
} from 'rxjs';

@Component({
  selector: 'app-pixel-axis',
  templateUrl: './pixel-axis.component.html',
  styleUrls: ['./pixel-axis.component.scss'],
})
export class PixelAxisComponent implements OnInit {
  heightChanged: Subject<number> = new ReplaySubject<number>();

  nodes$: Observable<Array<number>>;

  ngOnInit(): void {}

  constructor() {
    const element = inject(ViewContainerRef).element.nativeElement;
    const zone = inject(NgZone);

    const resizeObserver = new ResizeObserver((eventEntry) =>
      zone.run(() => this.heightChanged.next(eventEntry[0].contentRect.height))
    );

    resizeObserver.observe(element);

    this.nodes$ = this.heightChanged.pipe(
      debounceTime(50),
      map((height) => this.split(height)),
      tap((nodes) => console.log(nodes))
    );
  }

  private split(height: number): Array<number> {
    let currentNodeHeight = 0;
    const nodes: Array<number> = new Array<number>();

    do {
      currentNodeHeight += 50;
      nodes?.push(currentNodeHeight);
    } while (currentNodeHeight + 50 < height);
    return nodes;
  }
}
