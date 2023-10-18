import { Action, createReducer, on } from "@ngrx/store"
import { init } from "./main-page.actions"
import { MainPageState, TorrentItem } from "src/app/models/types"

const initialState : MainPageState = {
  appState: null,
  isLoading: true,
  torrents: [],
  error: null,
}

function parseTorrentsFromUrl(href: string): TorrentItem[] {
  const url = new URL(href);
  const torrentsJson =  url.searchParams.get("torrents") ?? "";
  const torrents = JSON.parse(torrentsJson);
  return torrents;
}

const _mainPageReducer = createReducer(initialState,
  on(init, (state) => {
    const webAppData = (window as any).Telegram.WebApp;
    const torrents = parseTorrentsFromUrl(window.location.href);
    return {
      ...state,
      isLoading: false,
      torrents: torrents,
      error: null,
      appState: webAppData,
    };
  })
)

export function mainPageReducer(state: MainPageState | undefined, action: Action) {
  return _mainPageReducer(state, action)
}
