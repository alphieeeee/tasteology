let keydownHandler = null;

export function setModalContent(modalImageEl, { src, alt, orientation }) {
    modalImageEl.src = src || 'https://placehold.co/600x400';
    modalImageEl.alt = alt || 'Default Modal Image';
    const container = modalImageEl.closest('.modal-content');
    if (container) {
        container.classList.remove('portrait');
        if (orientation === 'portrait') {
            container.classList.add('portrait');
        }
    }
}

export function openModal({ backdrop, content, section }) {
    if (!backdrop || !content) return;
    backdrop.lastFocused = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    backdrop.hidden = false;

    document.documentElement.classList.add('no-scroll');
    document.body.classList.add('no-scroll');
    section.forEach((el) => el.classList.add('blur-background'));

    const focusTarget = content;
    focusTarget.setAttribute('tabindex', '-1');
    focusTarget.focus();

    const getFocusable = () =>
    Array.from(content.querySelectorAll(
        'a[href], button, textarea, input, select, details,[tabindex]:not([tabindex="-1"])'
    )).filter(el => !el.hasAttribute('disabled') && !el.getAttribute('aria-hidden'));
    keydownHandler = (e) => {
        if (e.key === 'Escape') {
            e.stopPropagation();
            closeModal({ backdrop, content, section });
            return;
        }
        if (e.key === 'Tab') {
            const f = getFocusable();
            if (f.length === 0) {
                e.preventDefault();
                content.focus();
                return;
            }
            // LOOP FOCUS INSIDE MODAL
            const first = f[0];
            const last  = f[f.length - 1];
            if (e.shiftKey && document.activeElement === first) {
                // SHIFT + TAB
                e.preventDefault();
                last.focus();
            } else if (!e.shiftKey && document.activeElement === last) {
                // TAB
                e.preventDefault();
                first.focus();
            }
        }
    };
    document.addEventListener('keydown', keydownHandler, true);
}

export function closeModal({ backdrop, content, section }) {
    if (!backdrop || !content) return;

    backdrop.hidden = true;
    document.documentElement.classList.remove('no-scroll');
    document.body.classList.remove('no-scroll');
    section.forEach((el) => el.classList.remove('blur-background'));

    if (keydownHandler) {
        document.removeEventListener('keydown', keydownHandler, true);
        keydownHandler = null;
    }

    if (backdrop.lastFocused && typeof backdrop.lastFocused.focus === 'function') {
        backdrop.lastFocused.focus();
    }
}