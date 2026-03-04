<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Interactive Event Registration</title>
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap" rel="stylesheet">
<style>
/* Animated Gradient Background */
body {
  margin:0;
  font-family:'Roboto',sans-serif;
  min-height:100vh;
  display:flex;
  justify-content:center;
  align-items:flex-start;
  background: linear-gradient(270deg, #ff6ec4, #7873f5, #42e695, #f5af19);
  background-size: 800% 800%;
  animation: gradientBG 15s ease infinite;
}
@keyframes gradientBG {
  0%{background-position:0% 50%;}
  50%{background-position:100% 50%;}
  100%{background-position:0% 50%;}
}

/* Container Card */
.container{
  background:white;
  width:90%; max-width:1000px;
  border-radius:25px;
  padding:40px;
  box-shadow:0 25px 60px rgba(0,0,0,0.3);
  margin-top:40px;
}

/* Header */
h1{
  text-align:center;
  color:#764ba2;
  text-transform:uppercase;
  letter-spacing:1px;
}
p.description{
  text-align:center;
  color:#333;
  margin-bottom:30px;
}

/* Event Info */
.event-info ul{
  list-style:none;
  padding:0;
  margin:0 0 20px 0;
}
.event-info li{
  padding:6px 0;
  font-weight:bold;
}
.event-info li strong{color:#764ba2;}

/* Form Styling */
form{
  background:#f0f0f5;
  padding:30px;
  border-radius:20px;
  box-shadow:0 15px 40px rgba(0,0,0,0.2);
}
.form-group{
  position:relative;
  margin-bottom:20px;
}
.form-group input, .form-group select{
  width:100%;
  padding:14px;
  border-radius:12px;
  border:1px solid #ccc;
  transition:0.3s;
}
.form-group input:focus, .form-group select:focus{
  border:2px solid #764ba2;
  outline:none;
}
.form-group label{
  position:absolute;
  left:18px; top:14px;
  color:#888;
  transition:0.3s;
  pointer-events:none;
}
.form-group input:focus + label,
.form-group input:not(:placeholder-shown) + label,
.form-group select:focus + label,
.form-group select:not([value=""]) + label{
  top:-10px; left:12px;
  font-size:12px;
  color:#764ba2;
  background:white;
  padding:0 5px;
}

/* Radio and Checkbox */
.radio-group, .checkbox-group{
  display:flex;
  gap:20px;
  margin-bottom:15px;
}

/* Buttons */
button{
  padding:14px 30px;
  border:none;
  border-radius:15px;
  cursor:pointer;
  font-weight:bold;
  transition:all 0.3s ease;
}
.submit-btn{
  background:#42e695;
  color:white;
  margin-right:10px;
}
.submit-btn:hover{background:#36c17b; transform:translateY(-2px);}
.reset-btn{
  background:#f5af19;
  color:white;
}
.reset-btn:hover{background:#e49400; transform:translateY(-2px);}

/* Success Toast */
.toast{
  position:fixed; top:20px; right:20px;
  background:#28a745; color:white;
  padding:15px 25px; border-radius:12px;
  box-shadow:0 5px 15px rgba(0,0,0,0.3);
  opacity:0; pointer-events:none;
  transition:0.5s;
  z-index:1000;
}

/* Table Styling */
table{
  width:100%;
  border-collapse:collapse;
  margin-top:25px;
  border-radius:15px;
  overflow:hidden;
}
th, td{
  padding:12px;
  text-align:center;
  border-bottom:1px solid #ddd;
}
th{
  background:#764ba2;
  color:white;
}
tr:nth-child(even){background:#f2f2f2;}
tr:hover{background:#dcd6f7; transform:scale(1.01); transition:0.2s;}
tr.new-row{animation:fadeIn 0.8s ease;}
@keyframes fadeIn{from{opacity:0; transform:translateY(-20px);} to{opacity:1; transform:translateY(0);}}
button.delete-btn{
  background:#f54e4e;
  color:white;
  border:none;
  padding:6px 12px;
  border-radius:5px;
  cursor:pointer;
}
button.delete-btn:hover{background:#d32f2f; transform:scale(1.05); transition:0.2s;}

/* Participant counter */
.participant-count{
  margin-top:10px;
  font-weight:bold;
  color:#764ba2;
  text-align:right;
}

/* Input feedback */
input.error, select.error{border-color:#e74c3c; background:#fceaea;}
input.success, select.success{border-color:#28a745; background:#eaffea;}
</style>
</head>
<body>
<div class="container">
  <h1>Web Development Workshop 2026</h1>
  <p class="description">Learn modern web development skills with interactive exercises and fun sessions.</p>

  <div class="event-info">
    <ul>
      <li><strong>Date:</strong> 10 March 2026</li>
      <li><strong>Venue:</strong> Auditorium</li>
      <li><strong>Organizer:</strong> Dept. of Computer Applications</li>
    </ul>
  </div>

  <form id="registrationForm">
    <div class="form-group">
      <input type="text" id="name" placeholder=" ">
      <label>Name</label>
    </div>
    <div class="form-group">
      <input type="text" id="email" placeholder=" ">
      <label>Email</label>
    </div>
    <div class="form-group">
      <input type="text" id="phone" placeholder=" ">
      <label>Phone</label>
    </div>
    <div class="form-group">
      <input type="date" id="dob">
      <label>Date of Birth</label>
    </div>
    <div class="form-group">
      <select id="gender" value="">
        <option value="">Select</option>
        <option>Male</option>
        <option>Female</option>
      </select>
      <label>Gender</label>
    </div>
    <div class="form-group">
      <select id="event" value="">
        <option value="">Select Event</option>
        <option>Frontend Development</option>
        <option>Backend Development</option>
        <option>Full Stack Development</option>
      </select>
      <label>Event</label>
    </div>
    <div class="radio-group">
      <input type="radio" name="mode" value="Online"> Online
      <input type="radio" name="mode" value="Offline"> Offline
    </div>
    <div class="form-group">
      <input type="text" id="college" placeholder=" ">
      <label>College/Company</label>
    </div>
    <div class="checkbox-group">
      <input type="checkbox" id="confirm"> I confirm the details are correct
    </div>
    <button type="submit" class="submit-btn">Submit</button>
    <button type="reset" class="reset-btn">Reset</button>
  </form>

  <div class="participant-count">Total Participants: <span id="count">0</span></div>

  <table id="participantsTable">
    <tr><th>Name</th><th>Email</th><th>Phone</th><th>Event</th><th>Mode</th><th>Action</th></tr>
  </table>
</div>

<div id="toast" class="toast"></div>

<script>
const form = document.getElementById("registrationForm");
const table = document.getElementById("participantsTable");
const toast = document.getElementById("toast");
const countDisplay = document.getElementById("count");
let count = 0;
let registeredEmails = [];

function showToast(msg, success=true){
  toast.style.background = success?"#28a745":"#f54e4e";
  toast.innerText = msg;
  toast.style.opacity=1;
  setTimeout(()=>{toast.style.opacity=0;},3000);
}

function validateEmail(email){
  return /^[^ ]+@[^ ]+\.[a-z]{2,3}$/.test(email);
}

form.addEventListener("submit", function(e){
  e.preventDefault();
  const name=document.getElementById("name");
  const email=document.getElementById("email");
  const phone=document.getElementById("phone");
  const dob=document.getElementById("dob");
  const gender=document.getElementById("gender");
  const eventSelect=document.getElementById("event");
  const college=document.getElementById("college");
  const confirm=document.getElementById("confirm");
  const mode=document.querySelector('input[name="mode"]:checked');

  [name,email,phone,dob,gender,eventSelect,college].forEach(f=>{
    f.classList.remove("error","success");
  });

  let valid=true;

  if(name.value===""){name.classList.add("error"); valid=false;}else{name.classList.add("success");}
  if(!validateEmail(email.value)){email.classList.add("error"); valid=false;}else{email.classList.add("success");}
  if(phone.value.length!==10 || isNaN(phone.value)){phone.classList.add("error"); valid=false;}else{phone.classList.add("success");}
  if(dob.value===""){dob.classList.add("error"); valid=false;}else{dob.classList.add("success");}
  if(gender.value===""){gender.classList.add("error"); valid=false;}else{gender.classList.add("success");}
  if(eventSelect.value===""){eventSelect.classList.add("error"); valid=false;}else{eventSelect.classList.add("success");}
  if(college.value===""){college.classList.add("error"); valid=false;}else{college.classList.add("success");}
  if(!mode){showToast("Select mode!","error"); valid=false;}
  if(!confirm.checked){showToast("Confirm your details!","error"); valid=false;}
  if(registeredEmails.includes(email.value)){showToast("Email already registered!","error"); valid=false;}
  if(!valid) return;

  const row = table.insertRow();
  row.classList.add("new-row");
  row.insertCell(0).innerText=name.value;
  row.insertCell(1).innerText=email.value;
  row.insertCell(2).innerText=phone.value;
  row.insertCell(3).innerText=eventSelect.value;
  row.insertCell(4).innerText=mode.value;

  const delCell=row.insertCell(5);
  const delBtn=document.createElement("button");
  delBtn.innerText="Delete";
  delBtn.classList.add("delete-btn");
  delBtn.onclick=function(){
    table.deleteRow(row.rowIndex);
    count--; countDisplay.innerText=count;
    registeredEmails = registeredEmails.filter(e=>e!==email.value);
    showToast("Participant removed","error");
  };
  delCell.appendChild(delBtn);

  count++; countDisplay.innerText=count;
  registeredEmails.push(email.value);
  showToast("Registration Successful!");
  form.reset();
  [name,email,phone,dob,gender,eventSelect,college].forEach(f=>f.classList.remove("success"));
});
</script>
</body>
</html>
