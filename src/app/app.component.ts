import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TokenService } from './core/token.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  constructor(private tokenService: TokenService) {}

  ngOnInit(): void {
    this.tokenService.setAuthorizationToken();
  }
}
