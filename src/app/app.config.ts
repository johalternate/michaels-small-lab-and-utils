import { ApplicationConfig, provideAppInitializer, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';
import { initializeMaterialSymbols } from './core/initializers/initialize-material-symbols';
import { initializeSvgIcons } from './core/initializers/initialize-svg-icons';

export const appConfig: ApplicationConfig = {
    providers: [
        provideZoneChangeDetection({ eventCoalescing: true }),
        provideRouter(routes),
        provideAnimationsAsync(),
        provideHttpClient(),
        provideAppInitializer(() => initializeMaterialSymbols()),
        provideAppInitializer(() => initializeSvgIcons()),
    ],
};
