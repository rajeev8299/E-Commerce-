/* =========================================
   Icon Replacer - FA Icons to Inline SVG
   Lightning fast, no external requests
   ========================================= */

(function() {
    'use strict';

    // SVG icon library - optimized, no external dependencies
    const icons = {
        // Navigation & UI
        'home': '<path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>',
        'store': '<path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>',
        'th-large': '<path d="M4 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4zM14 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z"/>',
        'star': '<path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/>',
        'comments': '<path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>',
        'envelope': '<path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>',
        'info-circle': '<path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>',
        'blog': '<path d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"/>',
        'question-circle': '<path d="M8.228 9c.549-1.165 1.703-2 3.272-2 1.825 0 3.25 1.158 3.25 2.75 0 1.378-.838 2.21-1.84 2.605-.943.367-1.91.645-2.41 1.195M12 17h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>',

        // Shopping
        'shopping-cart': '<path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>',
        'shopping-bag': '<path d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>',
        'heart': '<path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>',
        'search': '<path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>',
        'plus': '<path d="M12 4v16m8-8H4"/>',
        'times': '<path d="M6 18L18 6M6 6l12 12"/>',
        'check': '<path d="M5 13l4 4L19 7"/>',
        'arrow-right': '<path d="M17 8l4 4m0 0l-4 4m4-4H3"/>',
        'arrow-up': '<path d="M5 10l7-7m0 0l7 7m-7-7v18"/>',
        'arrow-down': '<path d="M19 14l-7 7m0 0l-7-7m7 7V3"/>',
        'chevron-right': '<path d="M9 5l7 7-7 7"/>',
        'chevron-down': '<path d="M19 9l-7 7-7-7"/>',

        // Features
        'truck': '<path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"/>',
        'shield-alt': '<path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>',
        'undo': '<path d="M3 10h10a5 5 0 015 5v2M3 10l4-4M3 10l4 4"/>',
        'headset': '<path d="M9 19V6a3 3 0 016 0v13M9 19a3 3 0 01-3-3v-2a3 3 0 013-3h6a3 3 0 013 3v2a3 3 0 01-3 3M9 19h6"/>',

        // Categories
        'laptop': '<path d="M3 4h14a2 2 0 012 2v8a2 2 0 01-2 2H3a2 2 0 01-2-2V6a2 2 0 012-2zM1 18h18"/>',
        'tshirt': '<path d="M3 4h2l2 2h6l2-2h2v4l-2 1v9H5v-9L3 8V4z"/>',
        'couch': '<path d="M5 11V7a2 2 0 012-2h10a2 2 0 012 2v4M5 11h14a2 2 0 012 2v4a1 1 0 01-1 1h-2v-3H6v3H4a1 1 0 01-1-1v-4a2 2 0 012-2z"/>',
        'dumbbell': '<path d="M4 8h16M4 16h16M8 4v16M16 4v16"/>',
        'book': '<path d="M4 4h12a4 4 0 014 4v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4z M16 4v18"/>',
        'gamepad': '<path d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>',

        // Actions
        'play-circle': '<path d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>',
        'cart-plus': '<path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z M12 8v4m0 0v4m0-4h4m-4 0H8"/>',
        'eye': '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z M12 15a3 3 0 100-6 3 3 0 000 6z"/>',
        'gift': '<path d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V6a2 2 0 10-2 2h2zm0 0v13m-8-7h16M4 8h16M5 21h14a2 2 0 002-2v-7H3v7a2 2 0 002 2z"/>',
        'paper-plane': '<path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>',
        'fire': '<path d="M12 2c1 4 5 6 5 11a5 5 0 11-10 0c0-2 1-3 1-5 2 2 3 4 4-1 0-2-1-4 0-5z"/>',

        // Stats
        'users': '<path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>',
        'box-open': '<path d="M5 8h14l-1 12H6L5 8zM3 8l2-3h14l2 3M9 8v4m6-4v4"/>',
        'globe': '<path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>',
        'award': '<path d="M12 15a3 3 0 100-6 3 3 0 000 6z M19.071 4.929l-2.828 2.828M19.071 19.071l-2.828-2.828M4.929 19.071l2.828-2.828M4.929 4.929l2.828 2.828 M12 2l3 6 6 1-4.5 4.5L18 20l-6-3-6 3 1.5-6.5L3 9l6-1 3-6z"/>',

        // Interface
        'bars': '<path d="M4 6h16M4 12h16M4 18h16"/>',
        'play': '<path d="M5 3l14 9-14 9V3z"/>',
        'lock': '<path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>',
        'percent': '<path d="M19 5L5 19M5 5l14 14"/>',
        'map-marker-alt': '<path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>',
        'phone': '<path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>',
        'clock': '<path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>',
        'calendar': '<path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>',
        'spa': '<path d="M12 2L9 9l3 6 3-6-3-7z M5 12c2 3 5 5 7 5s5-2 7-5c-2 1-4 1-7 1s-5 0-7-1z"/>',
        'rocket': '<path d="M9 19V6l3-3 3 3v13M9 19h6M9 19v2h6v-2"/>',
        'th': '<path d="M4 5h6v6H4V5zM14 5h6v6h-6V5zM4 13h6v6H4v-6zM14 13h6v6h-6v-6z"/>',
        'sparkles': '<path d="M5 3v4M3 5h4M6 17v4M4 19h4M13 3l1.5 4.5L19 9l-4.5 1.5L13 15l-1.5-4.5L7 9l4.5-1.5L13 3z"/>',
        'check-circle': '<path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>',
        'exclamation': '<path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>',
        'info': '<path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>',
        'star-half-alt': '<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z M12 13.5V6.5l-2.09 4.26L6 11.27l4 3.87-.94 5.5L12 17.77V13.5z"/>',

        // Brands (simplified)
        'apple': '<path d="M12 2c-1 0-2.5.5-3.5 1.5-1 1-1.5 2.5-1.5 3.5 0 1 .5 2 1.5 2.5 1 .5 2 .5 3 0 1-.5 2-1 3-1s2 .5 3 1c1 .5 2 .5 3 0 1-.5 1.5-1.5 1.5-2.5 0-1-.5-2.5-1.5-3.5C14.5 2.5 13 2 12 2z M8 14c0-2 1-3 2-3M16 14c0-2-1-3-2-3"/>',
        'google': '<path d="M12 2L4 6v6c0 5 3.5 9.5 8 10 4.5-.5 8-5 8-10V6l-8-4z"/>',
        'microsoft': '<path d="M3 3h8v8H3V3zM13 3h8v8h-8V3zM3 13h8v8H3v-8zM13 13h8v8h-8v-8z"/>',
        'amazon': '<path d="M3 14c0-2 1-3 2-3l4-1c1 0 2 0 3 1 0-1 1-2 2-2 2 0 3 1 3 3v6c0 1 0 2 1 2M3 18c4 3 9 4 14 2M3 22c4 3 9 4 14 2"/>',
        'spotify': '<path d="M12 2a10 10 0 100 20 10 10 0 000-20z M7 9c4-1 8-1 11 1M7 13c3-1 7-1 9 1M7 17c2-1 5-1 7 1"/>',
        'slack': '<path d="M5 9a2 2 0 11-4 0 2 2 0 014 0zM9 5a2 2 0 110 4 2 2 0 010-4zM19 15a2 2 0 11-4 0 2 2 0 014 0zM15 19a2 2 0 110-4 2 2 0 010 4z"/>',
        'facebook-f': '<path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>',
        'twitter': '<path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>',
        'instagram': '<path d="M17 2H7a5 5 0 00-5 5v10a5 5 0 005 5h10a5 5 0 005-5V7a5 5 0 00-5-5z M12 15a3 3 0 100-6 3 3 0 000 6z"/>',
        'linkedin-in': '<path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6z M2 9h4v12H2V9z M4 6a2 2 0 100-4 2 2 0 000 4z"/>',
        'youtube': '<path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.33z M9.75 15.02V8.48l5.75 3.27-5.75 3.27z"/>',

        // Payment
        'cc-visa': '<path d="M2 6h20v12H2V6z M6 16l2-8h2l-2 8H6z M12 8h2l-1 8h-2l1-8z"/>',
        'cc-mastercard': '<path d="M2 6h20v12H2V6z M7 12a3 3 0 116 0 3 3 0 01-6 0z M11 12a3 3 0 116 0 3 3 0 01-6 0z"/>',
        'cc-paypal': '<path d="M2 6h20v12H2V6z M7 10h6c1 0 2 1 2 2s-1 2-2 2H9l-1 2H6l1-6z"/>',
        'cc-apple-pay': '<path d="M2 6h20v12H2V6z M5 14l1-4 1 4h1l1-4v4h1v-5h-1l-1 3-1-3H6v5h1v-4z M12 13c-1 1 0 2 1 2v-1c-1 0-1-1 0-1v-1c-1 0-1 0-1 1z"/>',
        'cc-stripe': '<path d="M2 6h20v12H2V6z M6 10h2v6H6v-6z M10 10h2v6h-2v-6z"/>',
        'quote-left': '<path d="M7 7h3v4H7v3H4V7h3zm9 0h3v4h-3v3h-3V7h3z"/>',
        'trash': '<path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6M1 7h22M9 7V4a1 1 0 011-1h4a1 1 0 011 1v3"/>',
        'circle': '<circle cx="12" cy="12" r="10"/>',
        'circle-notch': '<path d="M12 2a10 10 0 0110 10" fill="none" stroke="currentColor" stroke-width="2"/>'
    };

    // Brand icon aliases
    const aliases = {
        'apple': 'apple', 'google': 'google', 'microsoft': 'microsoft',
        'amazon': 'amazon', 'spotify': 'spotify', 'slack': 'slack',
        'facebook-f': 'facebook-f', 'twitter': 'twitter',
        'instagram': 'instagram', 'linkedin-in': 'linkedin-in',
        'youtube': 'youtube'
    };

    // Regular icon aliases
    const regularIcons = {
        'far fa-heart': 'heart',
        'far fa-eye': 'eye',
        'fas fa-heart': 'heart'
    };

    function createSVG(iconName, classes) {
        const iconData = icons[iconName];
        if (!iconData) return null;

        const isCircle = iconName === 'circle-notch';
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('viewBox', '0 0 24 24');
        svg.setAttribute('fill', 'none');
        if (!isCircle) {
            svg.setAttribute('stroke', 'currentColor');
            svg.setAttribute('stroke-width', '2');
            svg.setAttribute('stroke-linecap', 'round');
            svg.setAttribute('stroke-linejoin', 'round');
        } else {
            svg.setAttribute('stroke', 'currentColor');
            svg.setAttribute('stroke-width', '2');
        }
        svg.setAttribute('width', '1em');
        svg.setAttribute('height', '1em');
        svg.setAttribute('aria-hidden', 'true');
        svg.classList.add('svg-icon');

        if (classes) svg.className = classes;

        svg.innerHTML = iconData;
        return svg;
    }

    function replaceIcons() {
        const allIcons = document.querySelectorAll('i[class*="fa-"], i.fa');
        allIcons.forEach(icon => {
            const classList = Array.from(icon.classList);
            let iconName = null;
            let prefix = 'fas';

            // Find icon class
            for (const cls of classList) {
                if (cls.startsWith('fa-') && cls !== 'fa') {
                    iconName = cls.substring(3);
                    break;
                }
            }

            // Find prefix
            if (classList.includes('far')) prefix = 'far';
            else if (classList.includes('fab')) prefix = 'fab';

            if (!iconName) return;

            const svg = createSVG(iconName, icon.className);
            if (!svg) return;

            // Copy styles
            const style = icon.getAttribute('style');
            if (style) svg.setAttribute('style', style);

            icon.parentNode.replaceChild(svg, icon);
        });
    }

    // Run as soon as DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', replaceIcons);
    } else {
        replaceIcons();
    }

    // Expose for re-runs after dynamic content
    window.replaceIcons = replaceIcons;
})();
