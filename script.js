const chef = document.getElementById('chef');
const thoughtBubble = document.getElementById('thought-bubble');

const messages = [
  'Ayyaiiyoooo Eat Kimchi Today',
  'I have a secret recipe to share!',
  'Hello Im Chef. Chotu!',
  'Cooking is an art!',
  'Let me be your virtual chef!',
];

chef.addEventListener('mouseenter', srm);
chef.addEventListener('mouseleave', hidetb);


function srm() {
  const ri = Math.floor(Math.random() * messages.length);
  thoughtBubble.textContent = messages[ri];
  thoughtBubble.style.display = 'block';
}

function hidetb() {
  thoughtBubble.style.display = 'none';
}
