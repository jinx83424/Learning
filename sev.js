function saveToLocal(event){
    event.preventDefault();
    const Uname=event.target.name.value;
    const Uemail=event.target.email.value;
    const Uphone=event.target.phone.value;
    const Utime=event.target.time.value;

    let user={
        name: Uname,
        email: Uemail,
        phone: Uphone,
        time: Utime
    }
    
    userLocal=JSON.stringify(user);
    localStorage.setItem("UserDetails" ,userLocal)
}