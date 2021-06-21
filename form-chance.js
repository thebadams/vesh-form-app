// Day - 1:  Roll 1d100,  >=50 ? New Form :  Same Form
// Day -2: Roll d100, >=40 ? new Form : Same Form
// Day -3: Roll d100, >=30 ? New Form : Same Form
// Day- 4: roll d100, > =20 ? New Form : Same Form
// Day-5: roll d100, > =10 ? New Form : Same Form
//Day 6: roll d100, >= 0 => Must be new Form

//Example: 
//Day 0: Veshgeimreadh, => roll get new form, roll Vesshfomhar as new form
//Day 1: Veshfomhar => Roll d100, result: < 50 : Same Form
// Day 2: Veshfomahar => roll d100, result: <40: Same Form
// Day 3: Veshfomhar => roll d100, result <30: Same Form
//Day 4: Veshfomhar => roll d100, result < 20: Same Form
//Day 5: Veshformhar => roll d100, result < 10: Same Form
//Day 6: Vehsfomhar => roll d100, result >=0: new Form
// Day 7: New Form

const possibleForms = ["Veshgeimreadh", "Veshearach", "Veshsamradh", "Veshfomhar"];

const prevForms = [
  possibleForms[1], 
  possibleForms[0],
  possibleForms[0],
  possibleForms[0],
  possibleForms[0],
  possibleForms[0]
]

const determineDays = (prevForms) => {
  let currentForm = prevForms[prevForms.length-1]
  let days = 1
  for (let index = prevForms.length-2; index >= 0; index--) {
    if(prevForms[index] === currentForm) {
      days++
    } else if( prevForms[index] !== currentForm)
    console.log(days)
    return days
  }
  console.log(days)
  return days
}

const determineChance = (days) => {
  let chance
  switch (days) {
    case 1:
      chance = 50
      break;
    case 2:
      chance = 40
      break;
    case 3:
      chance = 30
      break;
    case 4:
      chance = 20
      break;
    case 5:
      chance = 10
      break;
    case 6:
      chance = 0
      break;
    default:
      chance = "Error!"
      break;
  }
  console.log(chance)
}

determineChance(1)
determineChance(2)
determineChance(3)
determineChance(4)
determineChance(5)
determineChance(6)
determineChance(7)