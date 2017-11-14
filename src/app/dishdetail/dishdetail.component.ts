import {Component, OnInit, Input} from '@angular/core';
import {Dish} from "../shared/dish";
import {DishService} from "../services/dish.service";
import {ActivatedRoute, Params} from "@angular/router";
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Comment} from "../shared/comment";

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {

    dish: Dish;
    dishIds: number[];
    prev: number;
    next: number;
    commentForm: FormGroup;
    formErrors = {
        'comment': '',
        'author': ''
    };
    validationMessages = {
        'comment': {
            'required':      'Comment is required.',

        },
        'author': {
            'required':      'Name is required.',
            'minlength':     'Name must be at least 2 characters long.',
        },
    };

    constructor(private dishservice: DishService,
                private route: ActivatedRoute,
                private location: Location,
                private fb: FormBuilder)
    {
        this.createForm();
    }


    ngOnInit() {

        this.dishservice.getDishIds().subscribe(dishIds => this.dishIds = dishIds);
        this.route.params
            .switchMap((params: Params) => this.dishservice.getDish(+params['id']))
            .subscribe(dish => { this.dish = dish; this.setPrevNext(dish.id); });
    }

    createForm() {
        this.commentForm = this.fb.group({
            rating: 5,
            comment: ['', [Validators.required]],
            author: ['', [Validators.required, Validators.minLength(2)]],
        });

        this.commentForm.valueChanges
            .subscribe(data => {
                this.onValueChanged(data);
            });

        this.onValueChanged(); // (re)set validation messages now
    }

    onValueChanged(data?: any) {
        if (!this.commentForm) { return; }

        const form = this.commentForm;
        for (const field in this.formErrors) {
            // clear previous error message (if any)
            this.formErrors[field] = '';
            const control = form.get(field);
            if (control && control.dirty && !control.valid) {
                const messages = this.validationMessages[field];
                for (const key in control.errors) {
                    this.formErrors[field] += messages[key] + ' ';
                }
            }
        }
    }

    onSubmit() {

        const comment: Comment = this.commentForm.value;
        comment.date = new Date().toString();
        this.dish.comments.push(comment);
        this.commentForm.reset();
    }


    goBack(): void {
        this.location.back();
    }

    setPrevNext(dishId: number) {
        let index = this.dishIds.indexOf(dishId);
        this.prev = this.dishIds[(this.dishIds.length + index - 1)%this.dishIds.length];
        this.next = this.dishIds[(this.dishIds.length + index + 1)%this.dishIds.length];
    }
}


