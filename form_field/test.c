#include <stdio.h>
#define max 5
int main() {
    int array[max] = {81, 71, 51, 21, 11};
    int i = 0;
    int *ptr_array;
    ptr_array = array;
    while (ptr_array <= &array[max - 2]) {
        printf("%d\n", *(++ptr_array));
        i++;
    }
    return 0;
}
