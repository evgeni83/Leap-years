var firstYear;
var lastYear;

while (firstYear == undefined || lastYear == undefined || firstYear >= lastYear || firstYear < 0 || lastYear > 2500) {
    while (isNaN(firstYear) || !firstYear || firstYear < 1900 || firstYear >= 2500 || !parseInt(firstYear)) {
        firstYear = prompt('Введите начальный год:', '');
        if (isNaN(firstYear) || !parseInt(firstYear) || !firstYear) {
            alert('Это не число!');
            continue;
        };
        if (firstYear < 1900) {
            alert('Это было слишком давно! (1900 - minimum)');
            continue;
        };
        if (firstYear >= 2500) {
            alert('Не будем заглядывать в столь далекое будущее. (2500 - maximum)');
        };
    };

    while (isNaN(lastYear) || !lastYear || lastYear < 1900 || lastYear >= 2500 || !parseInt(lastYear)) {
        lastYear = prompt('Введите конечный год:', '');
        if (isNaN(lastYear) || !parseInt(lastYear) || !lastYear) {
            alert('Это не число!');
            continue;
        };
        if (lastYear < 1900) {
            alert('Это было слишком давно! (1900 - minimum)');
            continue;
        };
        if (lastYear >= 2500) {
            alert('Не будем заглядывать в столь далекое будущее. (2500 - maximum)');
        };
    };
    
    if (firstYear == lastYear) {
        alert('Это один и тот же год. Попробуйте ещё раз.');
        firstYear = null;
        lastYear = null;
    };
    
    if (firstYear > lastYear) {
        alert(firstYear + ' год наступил позже, чем ' + lastYear + '. Попробуйте ещё раз.');
        firstYear = null;
        lastYear = null;
    };
}

var yearUnderReview = firstYear;

while (yearUnderReview <= lastYear) {
    if ((yearUnderReview % 4) == 0 && (yearUnderReview % 100) != 0) {
        console.log(yearUnderReview);
        ++yearUnderReview;
    } else if ((yearUnderReview % 4) == 0 && (yearUnderReview % 100) == 0 && (yearUnderReview % 400) == 0) {
        console.log(yearUnderReview);
        ++yearUnderReview;
    } else {
        ++yearUnderReview;
    };
};


