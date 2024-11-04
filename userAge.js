function collectUserInfo() {

    let userInfo = {};

    userInfo.fullName = prompt("Jeric Ayson:");

    userInfo.age = parseInt(prompt("20:"), 10);

    userInfo.favoriteNumber = parseInt(prompt("23:"), 10);

    userInfo.favoriteColor = prompt("Black:");

    if (userInfo.age < 5) {
        userInfo.ageGroup = "Toddler";
    } else if (userInfo.age >= 5 && userInfo.age <= 12) {
        userInfo.ageGroup = "Child";
    } else if (userInfo.age >= 13 && userInfo.age <= 19) {
        userInfo.ageGroup = "Teenager";
    } else if (userInfo.age >= 20 && userInfo.age <= 35) {
        userInfo.ageGroup = "Young Adult";
    } else if (userInfo.age >= 36 && userInfo.age <= 60) {
        userInfo.ageGroup = "Middle Age";
    } else {
        userInfo.ageGroup = "Senior";
    }

    console.log("User Information Collected:", userInfo);

    return userInfo;
}

collectUserInfo();
