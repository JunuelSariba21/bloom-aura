import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports:[RouterModule],
  standalone: true,
  templateUrl: './footer.html',
  styleUrls: ['./footer.css']
})
export class Footer {}
