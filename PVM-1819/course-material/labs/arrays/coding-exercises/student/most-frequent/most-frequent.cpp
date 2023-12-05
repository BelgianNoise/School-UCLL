#include "most-frequent.h"
#include <limits>
// derde parmeter anders error
void veryquicksort(int*, unsigned, unsigned);

int most_frequent(int* ns, unsigned size)
{
	if (size == 0) {
		return 99999999;
	}
	if (size == 1) {
		return ns[0];
	}

	// kopieke maken
	int* kopieke = new int[size];
	for (unsigned i = 0; i < size; i++) {
		kopieke[i] = ns[i];
	}

	unsigned nothing = 0;
	veryquicksort(ns, size, nothing);
	int counter = 1;
	int highestcount = -1;
	int res = 123123123;

	for (unsigned i = 0; i < size-1; i++) {
		if (ns[i] != ns[i + 1]) {
			
			if (counter > highestcount) {
				highestcount = counter;
				res = ns[i];
				counter = 1;
			}
			if (counter == highestcount) {
				for (unsigned j = 0; j < size; j++) {
					if (kopieke[j] == ns[i]) {
						res = ns[i];
						counter = 1;
						break;
					}
					if (kopieke[j] == res) {
						counter = 1;
						break;
					}
				}
				continue;
			}
		}
		else {
			if (i + 1 == size - 1) {
				counter++;
				if (counter > highestcount) {
					highestcount = counter;
					res = ns[i];
					counter = 1;
					continue;
				}
				if (counter == highestcount) {
					for (unsigned j = 0; j < size; j++) {
						if (kopieke[j] == ns[i]) {
							res = ns[i];
							counter = 1;
							break;
						}
						if (kopieke[j] == res) {
							counter = 1;
							break;
						}
					}
					continue;
				}
			}
			counter++;
		}
	}
	return res;
}


void veryquicksort(int* ns, unsigned size, unsigned nothing)
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
