import { TelegramWebApps } from 'telegram-webapps-types';

export interface MainPageState {
  isLoading: boolean;
  torrents: TorrentItem[];
  error: string | null;
  appState: TelegramWebApps.WebApp | null;
}

export interface TorrentItem {
  id: number;
  name: string;
  sizeBytes: number;
  seeders: number;
  leechers: number;
}