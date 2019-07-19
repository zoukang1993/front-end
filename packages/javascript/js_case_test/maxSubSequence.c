#include <stdio.h>
#include <math.h>

int maxSubSequence(const int arr[], int N);

int main()
{
    const int arr[] = {-2, 11, -4, 13, -5, -2};
    int N = 6;

    // printf("%lu\n", sizeof arr / sizeof arr[0]);
    printf("%d is the best maxSubSequence\n", maxSubSequence(arr, N));
    return 0;
}

int maxSubSequence(const int arr[], int N)
{
    int i, j, k, maxSum, thisSum;
    maxSum = 0;

    // for (i = 0; i < N; i++) {
    //     for (j = i; j < N; j++) {
    //         thisSum = 0;
    //         for (k = i; k < j; k++) {
    //             thisSum += arr[k];
    //         }
    //
    //         if (thisSum > maxSum) {
    //             maxSum = thisSum;
    //         }
    //     }
    // }

    thisSum = 0;
    for (i = 0; i < N; i++) {
        thisSum += arr[i];

        if (thisSum > maxSum) {
            maxSum = thisSum;
        } else if (thisSum < 0){
            thisSum = 0;
        }
    }



    arr[i]  maxSum  thisSum
    -2      0       0
    11      11      11
    -4      11      7
    13      20      20
    -5      20      15
    -2      20      18

    return maxSum;
}
