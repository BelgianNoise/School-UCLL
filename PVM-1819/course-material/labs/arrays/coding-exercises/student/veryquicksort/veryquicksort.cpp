#include "veryquicksort.h"
#include <iostream>
void veryquicksort(int* ns, unsigned size)
{
	if (size > 1) {
		for (unsigned i = 1; i < size; i++) {
			if (ns[i-1] > ns[i]) {
				int temp = ns[i];
				ns[i] = ns[i-1];
				ns[i - 1] = temp;
				if (i <= 1) {
					i--;
				}
				else {
					i -= 2;
				}
			}
		}
	}
}