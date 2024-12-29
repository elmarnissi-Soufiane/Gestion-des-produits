import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  EtatProductStateEnum,
  ProductStateReducersServices,
} from '../../ngrx/reducers/products.reducers';
import { Store } from '@ngrx/store';
import {
  NewProductAction,
  SaveProductAction,
} from '../../ngrx/actions/products.actions';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-add-prod',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: './add-prod.component.html',
  styleUrl: './add-prod.component.css',
})
export class AddProdComponent implements OnInit {
  productFormGroup: FormGroup | null = null;

  submitted: boolean = false;
  state: ProductStateReducersServices | null = null;
  readonly etatProductStateEnum = EtatProductStateEnum;

  constructor(private _formBuilder: FormBuilder, private store: Store<any>) {}

  ngOnInit(): void {
    this.store.dispatch(new NewProductAction({}));
    this.store.subscribe((state) => {
      this.state = state.catalogueState;

      if (this.state?.etatProductStateEnum == this.etatProductStateEnum.NEW) {
        this.productFormGroup = this._formBuilder.group({
          name: ['', Validators.required],
          price: [0, Validators.required],
          quantity: [0, Validators.required],
          selected: [true, Validators.required],
          available: [true, Validators.required],
        });
      }
    });
  }

  newProduct() {
    this.store.dispatch(new NewProductAction({}));
  }

  // ajouter
  onSaveProduct() {
    this.submitted = true;
    if (this.productFormGroup?.invalid) return;
    this.store.dispatch(new SaveProductAction(this.productFormGroup?.value));
  }

  onReset(): void {
    this.productFormGroup?.reset({
      name: '',
      price: 0,
      quantity: 1,
      selected: false,
      available: true,
    });
  }
}
