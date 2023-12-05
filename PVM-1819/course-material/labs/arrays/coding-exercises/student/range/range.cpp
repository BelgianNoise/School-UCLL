#include "range.h"


int* range(int from, int to)
{
	int size = to - from + 1;
	int* res = new int[size];

	for (int i = 0; i <= size; i++) {
		res[i] = from + i;
	}
	return res;
}
