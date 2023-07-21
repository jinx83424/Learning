function saveToLocal(event){
    event.preventDefault();
    const name=event.target.name.value;
    const email=event.target.email.value;
    const phone=event.target.phone.value;
    const time=event.target.time.value;

    localStorage.setItem('name',name)
    localStorage.setItem('email',email)
    localStorage.setItem('phone',phone)
    localStorage.setItem('time',time)
}