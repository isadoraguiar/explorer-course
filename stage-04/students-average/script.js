// CRIANDO LISTA COM OS ALUNOS

/*
const students = [
  {
    name: 'João',
    gradeOne: 6,
    gradeTwo: 6
  },

  {
    name: 'Letícia',
    gradeOne: 10,
    gradeTwo: 9
  },

  {
    name: 'Diego',
    gradeOne: 8,
    gradeTwo: 10
  },

  {
    name: 'Julia',
    gradeOne: 5.5,
    gradeTwo: 5.5
  }
]

// CRIANDO A FUNÇÃO PARA CALCULAR A MÉDIA

let passGrade

function average(gradeOne, gradeTwo, name) {
  let averageCalc = (gradeOne + gradeTwo) / 2
  passGrade =
    averageCalc >= 7
      ? `Parabéns, ${name}! Você foi aprovado(a) no concurso!`
      : `Não foi dessa vez ${name}! Tente novamente!`
  return averageCalc
}

function print(student) {
  return `A média do(a) aluno(a) ${student.name} é: ${average(
    student.gradeOne,
    student.gradeTwo,
    student.name
  )}
  ${passGrade}`
}

for (let student of students) {
  let message = print(student)
  alert(message)
}
*/

// OUTRA FORMA DE FAZER

let studentsList = [
  {
    studentName: 'Murilo',
    gradeOne: 6,
    gradeTwo: 9
  },

  {
    studentName: 'Ana',
    gradeOne: 5,
    gradeTwo: 3
  },

  {
    studentName: 'Sara',
    gradeOne: 8,
    gradeTwo: 8
  },

  {
    studentName: 'Isabela',
    gradeOne: 7,
    gradeTwo: 8
  }
]

function calcAverage(gradeOne, gradeTwo) {
  let average = (gradeOne + gradeTwo) / 2
  return average
}

for (let student of studentsList) {
  indAverage = calcAverage(student.gradeOne, student.gradeTwo)
  let pass =
    indAverage >= 7
      ? `Parabéns pela sua aprovação!`
      : `Infelizmente não foi dessa vez! Estude mais.`

  alert(`A média de ${student.studentName} é ${indAverage}.
${pass}`)
}
