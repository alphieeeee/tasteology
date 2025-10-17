let lastFocused = null;

export function openModal(el, focusedEl) {
    if (!el) return;
    lastFocused = focusedEl;
    el.classList.add('open');
    el.setAttribute('aria-hidden', 'false');
    document.body.classList.add('no-scroll');
    console.log(el)
}

export function closeModal(el) {
    if (!el) return;
    el.classList.remove('open');
    el.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('no-scroll');
    console.log(el)
    if (lastFocused && typeof lastFocused.focus === "function") {
        lastFocused.focus();
    }
}

export function setModalContent(container, el, src, alt, orientation = 'landscape') {
    if (!el) return;
    if (src) el.src = src;
    el.alt = alt ?? 'Modal Image';
    if (orientation === 'portrait') container.classList.add('portrait');
}