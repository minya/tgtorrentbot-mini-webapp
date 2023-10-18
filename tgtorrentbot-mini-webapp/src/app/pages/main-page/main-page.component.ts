import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { MainPageState } from '../../models/types';
import { MainPageStore, initialState } from 'src/store/main-page.store';
import { init } from 'src/store/main-page.actions';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainPageComponent implements OnInit {

  @Input()
  input: MainPageState = initialState;

  constructor(
    private mainPageStore: MainPageStore,
    private changeDetectorRef: ChangeDetectorRef,
  ) { }

  ngOnInit(): void {
    this.mainPageStore.state$.subscribe({
      next: (state) => {
        this.input = state;
        this.changeDetectorRef.detectChanges();
      }
    });
    this.mainPageStore.dispatch(init());
  }
}

