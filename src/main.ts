import { ILogger } from './app/interfaces/ILogger';
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { DateAdapter, MAT_DATE_FORMATS, MAT_NATIVE_DATE_FORMATS, NativeDateAdapter, provideNativeDateAdapter } from '@angular/material/core';
import { MatNativeDateModule } from '@angular/material/core';
import { LoggerService } from './app/services/logger.service';
import { FilterLoggerService } from './app/services/filter-logger.service';

bootstrapApplication(AppComponent, {
  providers:[
    provideRouter(routes),
    {provide: DateAdapter, useClass: NativeDateAdapter}, {provide: MAT_DATE_FORMATS, useValue: MAT_NATIVE_DATE_FORMATS}, {provide: 'ILogger', useClass: FilterLoggerService}
  ]
})
  .catch((err) => console.error(err));

  
