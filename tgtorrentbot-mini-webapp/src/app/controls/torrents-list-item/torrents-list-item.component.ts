import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TorrentItem } from 'src/app/models/types';

@Component({
  selector: 'torrents-list-item',
  templateUrl: './torrents-list-item.component.html',
  styleUrls: ['./torrents-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TorrentsListItemComponent {

  @Input()
  torrent!: TorrentItem;

}
