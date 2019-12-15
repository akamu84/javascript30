const pressed = [];
const secretCode = 'secret';

window.addEventListener('keyup', e => {
  pressed.push(e.key);
  pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
  if (pressed.join('').includes(secretCode)) {
    // eslint-disable-next-line no-undef
    cornify_add();
  }
});
