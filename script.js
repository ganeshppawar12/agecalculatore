function calculateAge() {
    const birthdate = document.getElementById("birthdate").value;
    const years = document.getElementById("years");
    const months = document.getElementById("months");
    const days  = document.getElementById("days");
    if (birthdate === "") {
        document.getElementById("error").style.display = 'block'
        document.getElementById("error").innerHTML = "Please select a date.";
        setTimeout(()=>document.getElementById("error").style.display = 'none' ,1000)
        return;
    }

    const birthDateObj = new Date(birthdate);
    const today = new Date();

    let age = today.getFullYear() - birthDateObj.getFullYear();
    const monthDiff = today.getMonth() - birthDateObj.getMonth();
    const dayDiff = today.getDate() - birthDateObj.getDate();

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
    }
   years.innerHTML = age;
   months.innerHTML = monthDiff;
   days.innerHTML =dayDiff
    // document.getElementById("result").innerHTML = "You are " + age + " years old.";
}