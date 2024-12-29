import { Component, OnInit } from '@angular/core';
import {
  EtatProductStateEnum,
  ProductStateReducersServices,
} from '../../ngrx/reducers/products.reducers';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import {
  EditProductAction,
  UpdateProductAction,
} from '../../ngrx/actions/products.actions';

@Component({
  selector: 'app-edit-prod',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatCardModule,
  ],
  templateUrl: './edit-prod.component.html',
  styleUrl: './edit-prod.component.css',
})
export class EditProdComponent implements OnInit {
  productId: number;
  submitted: boolean = false;
  formBuild: boolean = false;
  productFormGroup?: FormGroup;
  readonly etatProductStateEnum = EtatProductStateEnum;
  state: ProductStateReducersServices | null = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private _formBuilder: FormBuilder,
    private store: Store<any>,
    private router: Router
  ) {
    this.productId = activatedRoute.snapshot.params['id'];
    console.log('Id : ', this.productId);
  }

  ngOnInit(): void {
    this.store.dispatch(new EditProductAction(this.productId));
    this.store.subscribe((state) => {
      this.state = state.catalogueState;

      // Vérifiez l'état de l'action de mise à jour du produit.
      if (this.state?.etatProductStateEnum === EtatProductStateEnum.UPDATED) {
        // Si l'état du produit a été mis à jour, activez l'affichage du message.
        this.formBuild = true;
      }

      // Chargez les informations du produit si l'état est "loaded".
      if (this.state?.etatProductStateEnum === EtatProductStateEnum.LAODED) {
        if (this.state.currectProductUpdate) {
          this.productFormGroup = this._formBuilder.group({
            id: [this.state.currectProductUpdate.id],
            name: [this.state.currectProductUpdate.name, Validators.required],
            price: [this.state.currectProductUpdate.price, Validators.required],
            quantity: [
              this.state.currectProductUpdate.quantity,
              Validators.required,
            ],
            selected: [this.state.currectProductUpdate.selected],
            available: [this.state.currectProductUpdate.available],
          });
        }
      }
    });
  }

  // ngOnInit(): void {
  //   this.store.dispatch(new EditProductAction(this.productId));
  //   this.store.subscribe((state) => {
  //     this.state = state.catalogueState;
  //     if (this.state?.etatProductStateEnum === EtatProductStateEnum.LAODED) {
  //       if (this.state.currectProductUpdate) {
  //         this.productFormGroup = this._formBuilder.group({
  //           id: [this.state.currectProductUpdate.id],
  //           name: [this.state.currectProductUpdate.name, Validators.required],
  //           price: [this.state.currectProductUpdate.price, Validators.required],
  //           quantity: [
  //             this.state.currectProductUpdate.quantity,
  //             Validators.required,
  //           ],
  //           selected: [this.state.currectProductUpdate.selected],
  //           available: [this.state.currectProductUpdate.available],
  //         });
  //         this.formBuild = true;
  //       }
  //     }
  //   });
  // }

  onUpdateProduct() {
    this.submitted = true;
    if (this.productFormGroup?.invalid) return;
    this.store.dispatch(new UpdateProductAction(this.productFormGroup?.value));
    this.formBuild = false;
  }

  okUpdateProduct() {
    this.router.navigateByUrl('/products');
  }
}
