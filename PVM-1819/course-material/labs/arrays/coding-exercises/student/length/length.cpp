#include "length.h"


unsigned length(int* start, int* end)
{
	unsigned res = 0;
	for (start; start != end; start += 1) {
		res++;
	}
	return res;
}
