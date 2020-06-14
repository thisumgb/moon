/**
 * Keyboard pressed state
 */
let keyboardPressedState = null;

/**
 * Get the pressed keys on the keyboard.
 *
 * @returns {object} keyboard event
 */
export function keyboardPressed() {
	if (event !== null && event instanceof KeyboardEvent) {
		keyboardPressedState = {
			key: event.key,
			keyAlt: event.altKey,
			keyCtrl: event.ctrlKey,
			keyMeta: event.metaKey,
			keyShift: event.shiftKey,
			repeating: event.repeat
		};
	}

	return keyboardPressedState;
}
