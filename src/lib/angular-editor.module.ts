import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

import { AngularEditorToolbarComponent } from './angular-editor-toolbar.component';
import { AngularEditorComponent } from './angular-editor.component';

@NgModule({
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule,
    TooltipModule
  ],
  declarations: [AngularEditorComponent, AngularEditorToolbarComponent],
  exports: [AngularEditorComponent, AngularEditorToolbarComponent]
})
export class AngularEditorModule {
}
