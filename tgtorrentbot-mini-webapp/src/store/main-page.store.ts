import { Injectable } from "@angular/core";
import { Action, Store } from "@ngrx/store";
import { BehaviorSubject } from "rxjs";
import { MainPageState } from "src/app/models/types";

export const initialState: MainPageState = {
  appState: null,
  isLoading: true,
  torrents: [],
  error: null,
};

@Injectable({ providedIn: 'root' })
export class MainPageStore {
  _state$: BehaviorSubject<MainPageState> = new BehaviorSubject<MainPageState>(initialState);

  public state$ = this._store.select<MainPageState>(
    (state) => (state as any).mainPage
  );

  constructor(private _store: Store) { }

  public dispatch(action: Action) {
    this._store.dispatch(action);
  }
}