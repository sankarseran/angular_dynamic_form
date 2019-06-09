import { Component, OnInit } from '@angular/core';
import * as data from '../shared/data';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from '../shared/common.service';

@Component({
  selector: 'app-take-test',
  templateUrl: './take-test.component.html',
  styleUrls: ['./take-test.component.scss']
})
export class TakeTestComponent implements OnInit {
  questions: any[];
  questionsFrom: FormGroup;
  saveFlag: boolean;
  get answersFrom() { return this.questionsFrom.get('answers') as FormArray; }

  constructor(private fb: FormBuilder, private router: Router, private common: CommonService) {
    this.questions = data.data.gk;
    this.common.clearResult();
  }

  ngOnInit() {
    console.log(this.questions);
    this.buildForm();
  }

  buildForm() {
    this.questionsFrom = this.fb.group({
      answers: this.fb.array(this.addForm())
    });
  }

  addForm(): FormGroup[] {
    const group = [];
    for (const qs of this.questions) {
      group.push(this.fb.group({
        answer: ['', [Validators.required]]
      }));
    }
    return group;
  }

  submit() {
    this.saveFlag = true;
    if (this.questionsFrom.valid) {
      const value = [
        { name: 'Correct', value: 0 },
        { name: 'Wrong', value: 0 }
      ];
      this.questionsFrom.value.answers.forEach((answer, idx) => {
        if (answer.answer === this.questions[idx].answer) {
          value[0].value += 1;
        } else {
          value[1].value += 1;
        }
      });
      this.common.setResult(value);
      this.router.navigate(['/result']);
    }
  }

}
