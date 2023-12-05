#include "lone-wolf.h"


int lone_wolf(int* ns, unsigned size)
{
	for (unsigned i = 0; i < size; i++) {
		bool prrprr = true;
		for (unsigned j = i + 1; j < size; j++) {
			if (ns[i] == ns[j] && ns[i] != -123123123) {
				ns[i] = -123123123;
				ns[j] = -123123123;
				prrprr = false;
				break;
			}
		}
		if (prrprr && ns[i] != -123123123) {
			return ns[i];
		}
	}
}