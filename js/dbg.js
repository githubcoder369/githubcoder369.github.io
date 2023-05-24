/**
 * 
 * @param {HTMLParagraphElement} el Element debug message to show
 * @param  {...any} args Any arguemnts
 */
export function dbg(el,...args) {
    el.textContent = args;
}