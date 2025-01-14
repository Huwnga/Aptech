#include <stdio.h>
#include <string.h>

// Function prototypes
void fun1(int n);
void fun2(int n);

int main() {
    // Test fun1 with different values
    printf("Testing fun1:\n");
    fun1(3);   // Should print "three"
    fun1(9);   // Should print "nine"
    fun1(10);  // Should do nothing

    // Test fun2 with different values
    printf("\nTesting fun2:\n");
    fun2(9);    // Should print "nine"
    fun2(15);   // Should print "fifteen"
    fun2(25);   // Should print "twenty five"
    fun2(100);  // Should do nothing

    return 0;
}

// Read numbers 0 to 9 and print them as words
void fun1(int n) {
    if (n >= 0 && n <= 9) {
        const char *words[] = { "zero", "one", "two", "three", "four", 
                                "five", "six", "seven", "eight", "nine" };
        printf("%s\n", words[n]);
    }
}

// Read numbers less than 100 and print them as words
void fun2(int n) {
    if (n < 100) {
        const char *ones[] = { "", "one", "two", "three", "four", "five", 
                               "six", "seven", "eight", "nine" };
        const char *teens[] = { "ten", "eleven", "twelve", "thirteen", "fourteen", 
                                "fifteen", "sixteen", "seventeen", "eighteen", "nineteen" };
        const char *tens[] = { "", "", "twenty", "thirty", "forty", "fifty", 
                               "sixty", "seventy", "eighty", "ninety" };

        if (n >= 10 && n <= 19) {
            printf("%s\n", teens[n - 10]);
        } else {
            int t = n / 10;
            int o = n % 10;
            if (t > 0) {
                printf("%s", tens[t]);
                if (o > 0) {
                    printf(" %s", ones[o]);
                }
            } else {
                printf("%s", ones[o]);
            }
            printf("\n");
        }
    }
}
