// Віктор Бірка, група АВ-21. Лабораторна робота 11.
// Аналіз оцінок студентів.

const grades = [10, 8, 12, 7, 9, 11];

function calculateAverage(grades) {
    let sum = 0;

    for (let i = 0; i < grades.length; i++) {
        sum += grades[i];
    }

    return sum / grades.length;
}

function findMaxGrade(grades) {
    let maxGrade = grades[0];

    for (let i = 1; i < grades.length; i++) {
        if (grades[i] > maxGrade) {
            maxGrade = grades[i];
        }
    }

    return maxGrade;
}

function countHighGrades(grades) {
    let count = 0;

    for (let i = 0; i < grades.length; i++) {
        if (grades[i] >= 10) {
            count++;
        }
    }

    return count;
}

function showResults(grades) {
    let gradesText = "";

    for (let i = 0; i < grades.length; i++) {
        if (i > 0) {
            gradesText += ", ";
        }
        gradesText += grades[i];
    }

    console.log("Аналіз оцінок");
    console.log("Оцінки студента: " + gradesText);
    console.log("Кількість оцінок: " + grades.length);
    console.log("Середній бал: " + calculateAverage(grades));
    console.log("Найвища оцінка: " + findMaxGrade(grades));
    console.log("Кількість високих оцінок: " + countHighGrades(grades));
}

showResults(grades);
