#include <stdio.h>

// Function prototypes
void displayStudentInfo(short int studentNumber, const char *fullName);
int calculateHalfEvenSum(int n);
void displayDoubleDigitNumbers(int n);
int inputValidNumber(int n);
void displayCommonDivisors(int m, int n);
double calculateT(int m, int n);

int main() {
    // Display student number and full name
    short int studentNumber = 1234; // Example student number
    char fullName[] = "Your Full Name";
    displayStudentInfo(studentNumber, fullName);

    // Step 2: Input an integer n and calculate the sum of all even numbers q (0 < q <= n/2)
    int inputNumber;
    printf("Enter a two-digit integer n: ");
    scanf("%d", &inputNumber);

    int evenSum = calculateHalfEvenSum(inputNumber);
    printf("Sum of all even numbers (0 < q <= n/2): %d\n", evenSum);

    // Display all integers k (0 < k < n) with double digits
    displayDoubleDigitNumbers(inputNumber);

    // Input another integer 0 < m < n with input validation
    int smallerNumber = inputValidNumber(inputNumber);

    // List all common divisors of m and n
    displayCommonDivisors(smallerNumber, inputNumber);

    // Calculate T
    double resultT = calculateT(smallerNumber, inputNumber);
    printf("T = %.2lf\n", resultT);

    return 0;
}

// Display student number and full name
void displayStudentInfo(short int studentNumber, const char *fullName) {
    printf("Student Number: %d\n", studentNumber);
    printf("Full Name: %s\n", fullName);
}

// Calculate the sum of all even numbers q (0 < q <= n/2)
int calculateHalfEvenSum(int n) {
    int evenSum = 0;
    int halfNumber = n / 2;
    for (int currentNumber = 1; currentNumber <= halfNumber; currentNumber++) {
        if (currentNumber % 2 == 0) {
            evenSum += currentNumber;
        }
    }
    return evenSum;
}

// Display all integers k (0 < k < n) with double digits
void displayDoubleDigitNumbers(int n) {
    printf("List of integers with double digits (0 < k < n): ");
    for (int doubleDigitNumber = 10; doubleDigitNumber < n; doubleDigitNumber++) {
        if (doubleDigitNumber % 11 == 0) {
            printf("%d ", doubleDigitNumber);
        }
    }
    printf("\n");
}

// Input another integer 0 < m < n with input validation
int inputValidNumber(int n) {
    int m;
    do {
        printf("Enter an integer m (0 < m < n): ");
        scanf("%d", &m);
    } while (m <= 0 || m >= n);
    return m;
}

// Display all common divisors of m and n
void displayCommonDivisors(int m, int n) {
    printf("Common divisors of %d and %d: ", m, n);
    for (int divisor = 1; divisor <= m && divisor <= n; divisor++) {
        if (m % divisor == 0 && n % divisor == 0) {
            printf("%d ", divisor);
        }
    }
    printf("\n");
}

// Calculate T
double calculateT(int m, int n) {
    return 1;
}
