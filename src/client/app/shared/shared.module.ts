import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// import { ToolbarComponent } from './toolbar/toolbar.component';
// import { NavbarComponent } from './navbar/navbar.component';
import { HttpRequest, ParseSDK } from './index';

/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */

@NgModule({
  imports: [CommonModule],
  declarations: [],
  exports: []
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [HttpRequest, ParseSDK]
    };
  }
}
