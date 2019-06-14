import { Component, Input } from '@angular/core';


@Component({
  selector: 'ngx-agent-stats',
  styleUrls: ['./agent-stats.component.scss'],
  templateUrl: './agent-stats.component.html',
})
export class AgentStatsComponent {
  @Input() title: string;
  @Input() type: string;
  @Input() on = true;
  flipped = false;

  toggleView() {
    this.flipped = !this.flipped;
  }
}
