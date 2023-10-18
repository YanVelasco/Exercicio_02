const students = [
  {
    name: "Yan",
    firstExamScore: (8.9),
    secondExamScore: (6.6),
  },
  {
    name: "Ronaldo",
    firstExamScore: 4,
    secondExamScore: 5.8,
  },
  {
    name: "Roberto",
    firstExamScore: 7,
    secondExamScore: 2.5,
  },
  {
    name: "Marcos",
    firstExamScore: 3.8,
    secondExamScore: 8.1,
  },
];

function middle(student) {
  const media = (student.firstExamScore + student.secondExamScore) / 2;

  media.toFixed(2);

  if (media >= 7) {
    alert(`Parabens, ${student.name} você passou`);
  } else {
    alert(`Não foi dessa vez, ${student.name}`);
  }
  alert(`A média do aluno ${student.name} foi de ${media}.`);
}

for (const student of students) {
  middle(student);
}
