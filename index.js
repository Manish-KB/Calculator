var x;
var a = [];
var b = [];
var l;
var flag = 0;
var m = false;
var mflag=0;
function displayValue(x) {
    l = a.length;

    if (Number.isInteger(x)) {
        a.push(x);
        document.getElementById("value").innerHTML = a.join("");
    }
    else if (x == '!' || x == '#' || x == '{' || x == '=') {
        if (x === '!') {
            a.length = 0;
            flag = 0;
            document.getElementById("value").innerHTML = " ";

        }
        else if (x === '#') {

            if (a.length > 0) {
                if (a[l - 1] == '(')
                    flag--;
                if (a[l - 1] == ')')
                    flag++;
                a.pop();
                document.getElementById("value").innerHTML = a.join("");

            }
            else {
                document.getElementById("value").innerHTML = "";
            }

            console.log(a.length);
        }
        else if (x == '=') {
            if (a.length > 0) {
                var v = eval(a.join(""));
                a.length = 0;
                a.push(v);
                console.log(v);
                document.getElementById("value").innerHTML = v;
            }
        }
        else if (x == '{') {
            var temp = Number.isInteger(a[l - 1]);

            if ((flag == 0) || ((flag == 0 || (a[l - 1] == '(') || a != '+' || a != '-' || a != '*' || a != '/' || a != '%') && temp == false && a[l - 1] != ')') || (flag == 0 && temp == true)) {
                a.push('(');
                document.getElementById("value").innerHTML = a.join("");
                flag++;

            }
            else {
                if ((flag > 0 && Number.isInteger(a[l - 1])) || (flag > 0 && a[l - 1] == ')')) {
                    a.push(')');
                    document.getElementById("value").innerHTML = a.join("");
                    flag--;
                }
            }
        }
    }

    else {
        if (Number.isInteger(a[l - 1]) || a[l - 1] == '(' || a[l - 1] == ')') {
            a.push(x);
            document.getElementById("value").innerHTML = a.join("");
        }
        else {

            if ((a[l - 1]) != "(") {
                console.log(a[l - 1]);
                a.push(x);
                document.getElementById("value").innerHTML = a.join("");
            }
        }
    }

    console.log(a);
}

const audio = new Audio('music.mp3');
function playMusic() {
    if(mflag==0)
    {
        document.getElementById("mb").style.color="white";
        mflag=1;
        setTimeout(function() { alert("You found me :) !!  "); }, 1000);
    
    
    }
    
        if (m == false) {
            console.log("Playing Music :)");
            audio.play();
            m = true;
            document.getElementById("mb").style.background = "rgba(255, 255, 255, 0.5)";
    
    
        }
        else if (m == true) {
            console.log("Music Paused :)");
            audio.pause();
            m = false;
            document.getElementById("mb").style.background = "transparent";
        }
    }
    
    function darkMode(x) {
        var theme = document.getElementsByTagName('link')[0];
    
        if (theme.getAttribute('href') == 'light.css') {
            theme.setAttribute('href', 'dark.css');
            document.getElementById("icon").className="fa-solid fa-sun";
       
       
    
    
        } else {
            theme.setAttribute('href', 'light.css');
            document.getElementById("icon").className="fa-solid fa-moon";
      
    
        }
    }