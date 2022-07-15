# Planit SDET Preliminary Assessment

# Introduction

- The Preliminary Assessment Consists Of Two Tasks.
  - First task is to write automated test cases for the website. https://jupiter.cloud.planittesting.com/#/
  - Second Task Is To Develop Solution For Any Two Challanges Out Of Seven.
- For Task One I Have Used Cypress Library To Write And Execute The Automation Test Cases.
- For Task Two I have Used Javascript And Wrote The Code In Node Environment. The Challange 2 And Challange 6 Are The Solutions I Have Provided In The Repository.

## Libraries That The Node Installs For This Project Are:

- cypress Library To Run Automation Tests
- axios for Challange 6 In Task 2

## Setting Up The Project

```
git clone https://github.com/srikrishnak-dev/planit-sdet-assessment.git
```

```
cd planit-sdet-assessment/
```

```
npm install
```

## Running The Task One

The Automated Test Cases Can be Run In Two Ways One Is In The Terminal And On Browser
To Run The Test Cases In Terminal Please Run The Following Command

```
npm run headless
```

If The Above Command Doesn't Work Please Run The Following Command

```
npx cypress run --spec 'cypress/e2e/all.spec.cy.js'
```

After All the Test Cases Have Implemented We Can See All The Test Cases How Many Have Been Passed And How Many Been Failed

While Running The Test Cases In Terminal Cypress Provides A Video Of How The Test Cases Are Implemented So That If Anything Goes Wrong In The Test We Can See What Went Wrong.

The Video Can Be Found In The Location:
`planit-sdet-assessment/cypress/videos/all.spec.cy.js.mp4`
<img src=".//images/Screen _Shot_1.png" alt="Logo of the project">

The Second Way To Run The Automated Test Cases Through Browser
To Run The Test Cases In Browser Please Run The Following Command

```
npx cypress open
```

Cypress Will Open An Application Which We Can See In The Below
Since All The Test Have Been Configured Please Press E2E Testing
<img src=".//images/Screen _Shot_2.png" alt="Logo of the project">
After Clicking E2E Testing It Will Promt To Select The Browser Please Select The Browser You Want To Select And Click `Start E2E Testing`.

<img src=".//images/Screen _Shot_3.png" alt="Logo of the project">

After Selecting Browser Cypress Opens In A Browser To Run The Test Files Please Click On The `all.spec.cy.js`

<img src=".//images/Screen _Shot_4.png" alt="Logo of the project">

After Clicking On The `all.spec.cy.js` All The Test Cases Executes One After Another We Can See It In The Below Image

<img src=".//images/Screen _Shot_5.png" alt="Logo of the project">

## Running The Task Two

Two Run The Challanges Please Run The Following Command

Challenge 2.

```
node challenges/challenge2
```

It Will Prompt You To Enter The Word To Find The Character With Highes Number Of Occurrences
After Providing The Input It Tells You The Character With Highest Number Of Occurances With The Count As Well.

The Execution Of The Challange Can Be Found Below.

<img src=".//images/Screen _Shot_6.png" alt="Logo of the project">

Challenge 6.

```
node challenges/challenge6
```

It Will Fetch The Data From The API And Display The Count Of Avaliable Pets.

The Execution Of The Challange Can Be Found Below.

<img src=".//images/Screen _Shot_7.png" alt="Logo of the project">
