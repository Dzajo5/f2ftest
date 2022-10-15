var numQues = 116;
var numChoi = 4;
var answers = new Array(116);

answers[0] = "is";
answers[1] = "a";
answers[2] = "is ten.";
answers[3] = "Peter’s";
answers[4] = "He’s";
answers[5] = "her";
answers[6] = "Yes, there is.";
answers[7] = "works";
answers[8] = "speak";
answers[9] = "play";
answers[10] = "do you";
answers[11] = "How much";
answers[12] = "like";
answers[13] = "went";
answers[14] = "are going";
answers[15] = "hungry";
answers[16] = "can";
answers[17] = "favourite";
answers[18] = "On";
answers[19] = "any";
answers[20] = "That’s all, thanks.";
answers[21] = "hasn’t";
answers[22] = "shall we buy";
answers[23] = "Have you";
answers[24] = "Shopping";
answers[25] = "many";
answers[26] = "more";
answers[27] = "was";
answers[28] = "is raining";
answers[29] = "generous";
answers[30] = "wrong";
answers[31] = "comedies";
answers[32] = "Did you have";
answers[33] = "Would you like";
answers[34] = "should";
answers[35] = "been";
answers[36] = "was";
answers[37] = "watch";
answers[38] = "ago";
answers[39] = "later";
answers[40] = "really";
answers[41] = "met";
answers[42] = "we’ll have";
answers[43] = "spend";
answers[44] = "I’ll come";
answers[45] = "happiest";
answers[46] = "wonder";
answers[47] = "shake";
answers[48] = "miss";
answers[49] = "embarrassed";
answers[50] = "Are you doing";
answers[51] = "are made";
answers[52] = "failed";
answers[53] = "Have";
answers[54] = "won";
answers[55] = "save";
answers[56] = "aren’t you";
answers[57] = "have";
answers[58] = "exhausted";
answers[59] = "have been";
answers[60] = "seeing";
answers[61] = "was walking";
answers[62] = "to be";
answers[63] = "in case";
answers[64] = "do";
answers[65] = "are being built";
answers[66] = "Don’t forget";
answers[67] = "who";
answers[68] = "in spite";
answers[69] = "sneezing";
answers[70] = "look it up";
answers[71] = "Would you mind if";
answers[72] = "told";
answers[73] = "invited";
answers[74] = "catch";
answers[75] = "didn’t have to";
answers[76] = "graduated";
answers[77] = "going";
answers[78] = "used to";
answers[79] = "famous for";
answers[80] = "had left";
answers[81] = "for offering";
answers[82] = "turned out";
answers[83] = "will be sitting";
answers[84] = "in favour of";
answers[85] = "been";
answers[86] = "Take";
answers[87] = "loan";
answers[88] = "doesn’t matter";
answers[89] = "so";
answers[90] = "going";
answers[91] = "your hair cut";
answers[92] = "annoys";
answers[93] = "have built";
answers[94] = "make";
answers[95] = "must have left";
answers[96] = "have finished";
answers[97] = "thoroughly";
answers[98] = "which";
answers[99] = "Seen";
answers[100] = "arrogant";
answers[101] = "although";
answers[102] = "hold";
answers[103] = "putting";
answers[104] = "carrying out";
answers[105] = "setback";
answers[106] = "considerably";
answers[107] = "should";
answers[108] = "frankly";
answers[109] = "didn’t have to";
answers[110] = "otherwise";
answers[111] = "to go";
answers[112] = "Due to";
answers[113] = "he accepted";
answers[114] = "gave";
answers[115] = "round";

function getScore(form) {
  var score = 0;
  var currElt;
  var currSelection;

  for (i = 0; i < numQues; i++) {
    currElt = i * numChoi;

    answered = false;

    for (j = 0; j < numChoi; j++) {
      currSelection = form.elements[currElt + j];

      if (currSelection.checked) {
        answered = true;

        if (currSelection.value == answers[i]) {
          score++;

          break;
        }
      }
    }

    /*  if (answered === false) {
          alert("Do answer all the questions, Please");
          return false;
        }*/
  }

  var scoreper = Math.round((score / numQues) * 100);

  form.percentage.value = scoreper + "%";

  form.mark.value = score;
}

function SendMail() {
  var params = {
    meno_priezvisko: document.getElementById("meno_priezvisko").value,
    firma: document.getElementById("firma").value,
    email: document.getElementById("email").value,
    //mark: document.getElementById("mark").value - toto nerobi, nacim mi sem napisat rezultat testu z getScore(form)
  };
  emailjs
    .send("service_1hf6wkd", "template_4dx8m9n", params)
    .then(function (res) {
      alert("Uspesne odoslane! " + res.status);
    });
}
