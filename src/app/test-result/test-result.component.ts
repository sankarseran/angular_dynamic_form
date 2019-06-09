import { Component, OnInit } from '@angular/core';
import { CommonService } from '../shared/common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test-result',
  templateUrl: './test-result.component.html',
  styleUrls: ['./test-result.component.scss']
})
export class TestResultComponent implements OnInit {
  single: { 'name': string; 'value': number; }[];
  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = false;
  xAxisLabel = 'Types';
  showYAxisLabel = false;
  yAxisLabel = 'Score';

  colorScheme = {
    domain: ['#5AA454', '#A10A28']
  };

  constructor(private common: CommonService, private router: Router) {
    if (!this.common.result) {
      this.router.navigate(['']);
    }
  }

  ngOnInit() {
    this.single = this.common.result;
  }

  onSelect(event) {
    console.log(event);
  }

}
