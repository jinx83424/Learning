function generateUniqueKey() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
}

function deleteUser(userKey) {
  if (typeof (Storage) !== 'undefined') {
    const users = JSON.parse(localStorage.getItem('users')) || {};
    delete users[userKey];
    localStorage.setItem('users', JSON.stringify(users));
    displayUserDetails();
  }
}
function editUser(userKey) {
  if (typeof (Storage) !== 'undefined') {
    const users = JSON.parse(localStorage.getItem('users')) || {};
    const userDetails = users[userKey];
    document.getElementById('name').value = userDetails.name;
    document.getElementById('email').value = userDetails.email;
    document.getElementById('phone').value = userDetails.phone;
    document.getElementById('time').value = userDetails.time;
    delete users[userKey];
    localStorage.setItem('users', JSON.stringify(users));
    displayUserDetails();
  }
}
function saveToLocal(event) {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const time = document.getElementById('time').value;

  const userDetails = {
    name: name,
    email: email,
    phone: phone,
    time: time
  };
const userKey = generateUniqueKey();
  if (typeof (Storage) !== 'undefined') {
    let users = JSON.parse(localStorage.getItem('users')) || {};
    users[userKey] = userDetails;
    localStorage.setItem('users', JSON.stringify(users));
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('time').value = '';
    displayUserDetails();
  }
}
function displayUserDetails() {
  const userDetailsContainer = document.getElementById('userDetails');
  const users = JSON.parse(localStorage.getItem('users')) || {};
  userDetailsContainer.innerHTML = '';
  Object.keys(users).forEach(userKey => {
    const user = users[userKey];

    const card = document.createElement('div');
    card.classList.add('card', 'mb-3');

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    const userName = document.createElement('h5');
    userName.classList.add('card-title');
    userName.textContent = user.name;

    const userEmail = document.createElement('p');
    userEmail.classList.add('card-text');
    userEmail.textContent = user.email;

    const userPhone = document.createElement('p');
    userPhone.classList.add('card-text');
    userPhone.textContent = user.phone;

    const userTime = document.createElement('p');
    userTime.classList.add('card-text');
    userTime.textContent = user.time;

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('btn', 'btn-danger', 'mt-2', 'me-2');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function () {
      deleteUser(userKey);
    });

    const editButton = document.createElement('button');
    editButton.classList.add('btn', 'btn-primary', 'mt-2');
    editButton.textContent = 'Edit';
    editButton.addEventListener('click', function () {
      editUser(userKey);
    });

    cardBody.appendChild(userName);
    cardBody.appendChild(userEmail);
    cardBody.appendChild(userPhone);
    cardBody.appendChild(userTime);
    cardBody.appendChild(deleteButton);
    cardBody.appendChild(editButton);

    card.appendChild(cardBody);

    userDetailsContainer.appendChild(card);
  });
}
window.onload = function () {
  displayUserDetails();
};
document.getElementById('myForm').addEventListener('submit', saveToLocal);
