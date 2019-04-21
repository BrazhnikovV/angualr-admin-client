import { Component, OnInit } from '@angular/core';
import { NgModel} from '@angular/forms';

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.sass']
})
export class CategoryCreateComponent implements OnInit {

  private checked = false;

  constructor() {}

  ngOnInit() {
  }
}
