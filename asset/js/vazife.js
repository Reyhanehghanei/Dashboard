let timerCircle = document.querySelector('#user-id');
let user = document.querySelector('#user-t');
let reminder = document.querySelector('.reminder-d')
let addreminder = document.querySelector('#add-reminder')
let btnOn = document.querySelector('.btn-on')
let poroje = document.querySelector('.poroje')
let porojed = document.querySelector('.poroje-d')
let btnOne = document.querySelector('#btn-one');
let btnTime = document.querySelector('.btn-time');
let timerAdd = document.querySelector('.time');
let Add = document.querySelector('#add-timer');
let sub = document.querySelector('#s-btn');
let btnKarbar = document.querySelector('.btn-karbar');
let btnVazife = document.querySelector('#btn-vazife');
let textBox = document.querySelector('.text-box');

function show() {
    if (document.getElementById('show').style.display == 'block') {
        document.getElementById('show').style.display = 'none'
    } else {
        document.getElementById('show').style.display = 'block'
    }
}

function Show_Hide() {
    var MyBox = document.getElementById("show");
    var MyButton = document.getElementById("btn-vazife");
    if (MyBox.style.display == "none") {
        MyBox.style.display = "block";
    } else {
        MyBox.style.display = "none";
    }
}

timerCircle.addEventListener('click', function (e) {
    user.style.display = 'block'
})

addreminder.addEventListener('click', function (e) {
    reminder.style.display = 'block'
})

btnOn.addEventListener('click', function (e) {
    reminder.style.display = 'none'
})


porojed.addEventListener('click', function (e) {
    poroje.style.display = 'block'
})
btnOne.addEventListener('click', function (e) {
    poroje.style.display = 'none'
})

Add.addEventListener('click', function (e) {
    timerAdd.style.display = 'block'
})

btnTime.addEventListener('click', function (e) {
    timerAdd.style.display = 'none'
})


btnKarbar.addEventListener('click', function (e) {
    reminder.style.display = 'none'
    addreminder.style.display = 'none'

})

// select box
function ChangeText() {
    var myselect = document.getElementById("MySelect");
    var result = document.getElementById("Result");
    result.innerHTML = "شما " + myselect.value + " را انتخاب کرده اید ";
    reminder.style.display = 'none'
    // addreminder.style.display = 'none'
}

function Text() {
    var mselect = document.getElementById("MSelect");
    var rsult = document.getElementById("Rsult");
    rsult.innerHTML = "شما " + mselect.value + " را انتخاب کرده اید ";
    poroje.style.display = 'none'
    // porojed.style.display = 'none'
}
// end select box 


// date
var dp = new HaDateTimePicker("#date4", {
    forceSetTime: true,
    // disableTime: true,
    // isLunar: true,
    minAllowedDate: new Date(2013, 7, 15),
    maxAllowedDate: new Date(2018, 8, 18),
    resultFormat: "{year}/{month}/{day} {hour}{t?:}{minute} {ampm}",
    disabledWeekDays: "1,3,5"
});
dp.show();
var elem = document.getElementById("date5");
var dp2 = new HaDateTimePicker(elem);

function showDp() {
    dp2.show();
}
// end date




