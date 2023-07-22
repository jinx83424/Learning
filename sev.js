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
  
    if (typeof (Storage) !== 'undefined') {
      let users = JSON.parse(localStorage.getItem('users')) || [];
  
      users.push(userDetails);
  
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
  
    const users = JSON.parse(localStorage.getItem('users')) || [];
  
    userDetailsContainer.innerHTML = '';
  
    users.forEach(user => {
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
  
      cardBody.appendChild(userName);
      cardBody.appendChild(userEmail);
      cardBody.appendChild(userPhone);
      cardBody.appendChild(userTime);
  
      card.appendChild(cardBody);
  
      userDetailsContainer.appendChild(card);
    });
  }
  
  window.onload = function () {
    displayUserDetails();
  };
  
  document.getElementById('myForm').addEventListener('submit', saveToLocal);
  