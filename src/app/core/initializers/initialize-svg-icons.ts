import { inject } from "@angular/core"
import { MatIconRegistry } from "@angular/material/icon"
import { DomSanitizer } from "@angular/platform-browser";

export function initializeSvgIcons() {
    const sanitizer = inject(DomSanitizer);
    const iconRegistry = inject(MatIconRegistry);
    iconRegistry.addSvgIconResolver((name, namespace) => {
        const url = namespace === ""
            ? `/icons/${name}.svg`
            : `/icons/${namespace}/${name}.svg`;
        return sanitizer.bypassSecurityTrustResourceUrl(url);
    })
}
