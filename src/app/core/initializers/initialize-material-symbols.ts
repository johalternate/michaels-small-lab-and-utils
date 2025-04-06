import { DOCUMENT } from "@angular/common";
import { inject } from "@angular/core"
import { MatIconRegistry } from "@angular/material/icon"

// credits to github user mmanista-bynd
// see: https://github.com/angular/components/issues/24845#issuecomment-1511399687
// should be called in provideAppInitializer

export function initializeMaterialSymbols() {
    const document = inject(DOCUMENT);
    const iconRegistry = inject(MatIconRegistry);

    const href = "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,300,0,0";
    const link = document.createElement('link');

    link.setAttribute("rel", "stylesheet");
    link.setAttribute("href", href);

    document.head.appendChild(link);

    const defaultFontSetClasses = iconRegistry.getDefaultFontSetClass();
    const outlinedFontSetClasses = defaultFontSetClasses
        .filter((klass) => klass !== 'material-icons')
        .concat(['material-symbols-outlined']);

    iconRegistry.setDefaultFontSetClass(...outlinedFontSetClasses);
}
