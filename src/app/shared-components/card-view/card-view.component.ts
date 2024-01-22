import { Component, Input, OnInit } from '@angular/core';
import { MatCardData } from './card-view.model';

@Component({
  selector: 'papp-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.scss']
})
export class CardViewComponent implements OnInit {

  @Input() cardContent!: MatCardData;

  ngOnInit(): void { 
    
  }

}
