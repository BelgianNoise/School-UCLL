#include "util.h"
#include "max.h"
void minmax(int* x, int* y, int* z, int* p, int* q) {
	p = max(x, y, z);
	q = min(x, y, z);
}