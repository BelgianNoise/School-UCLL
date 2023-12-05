#include "max.h"
#include "minmax.h"
#include "util.h"
void swap_min_and_max(int* x, int* y, int* z) {
	int* maxx = max(x, y, z);
	int* minn = min(x, y, z);
	int maxxx = *max(x, y, z);
	int minnn = *min(x, y, z);

	*maxx = minnn;
	*minn = maxxx;
}