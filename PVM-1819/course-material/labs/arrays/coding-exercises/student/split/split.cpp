#include "split.h"


void split(int* ns, unsigned size, int** odds, unsigned* n_odds, int** evens, unsigned* n_evens)
{
	// count evens
	unsigned nevens = 0;
	for (unsigned i = 0; i < size; i++) {
		if (ns[i] % 2 == 0) {
			nevens++;
		}
   }
	// make array of evens
	int* evensArr = new int[nevens];
	int counter = 0;
	for (unsigned i = 0; i < size; i++) {
		if (ns[i] % 2 == 0) {
			evensArr[counter] = ns[i];
			counter++;
		}
	}
	//count odds
	unsigned nodds = 0;
	for (unsigned i = 0; i < size; i++) {
		if (ns[i] % 2 == 1) {
			nodds++;
		}
	}
	// make array of odds
	int* oddsArr = new int[nodds];
	int counter2 = 0;
	for (unsigned i = 0; i < size; i++) {
		if (ns[i] % 2 != 0) {
			oddsArr[counter2] = ns[i];
			counter2++;
		}
	}

	// fix parameters
	*odds = oddsArr;
	*evens = evensArr;
	*n_evens = nevens;
	*n_odds = nodds;
}
