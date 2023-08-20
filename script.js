const mark = document.querySelector('main header #mark');
const section = document.querySelectorAll('.section');
const star = document.createElement('span');
const numberNot = document.querySelector('main header span');


function notificationHandler() {
  const notification = [];
  section.forEach((element) => {
    if (element.classList.contains('unread')) {
      notification.push(element);
      console.log(notification.length);
    }
  });
  numberNot.innerHTML = notification.length;
};

mark.addEventListener('click', () => {
  section.forEach((el) => {
    el.classList.remove('unread');
  });
  notificationHandler();
  if (numberNot.innerHTML === '0') {
    numberNot.remove();
  }
});
