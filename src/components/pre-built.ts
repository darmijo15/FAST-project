import {
    accentPalette,
    buttonStyles,
    fastButton,
    PaletteRGB,
    provideFASTDesignSystem,
    SwatchRGB,
} from '@microsoft/fast-components';
import { css, html } from '@microsoft/fast-element';
import { parseColorHexRGB } from '@microsoft/fast-colors';

provideFASTDesignSystem().register(
    fastButton({
        prefix: 'special',
        styles: (ctx, def) => css`
            ${buttonStyles(ctx, def)}
            :host {
                font-size: var(--type-ramp-plus-2-font-size);
            }
        `,
    })
);

accentPalette.withDefault(
    PaletteRGB.from(SwatchRGB.from(parseColorHexRGB('#005A9C')!))
);
