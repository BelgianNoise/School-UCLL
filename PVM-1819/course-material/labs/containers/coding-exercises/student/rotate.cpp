#include "rotate/rotate.h"

using namespace std;

void rotate(vector<int>*	 ns, int delta) {
	bool isNegative = false;
	if (delta < 0) {
		isNegative = true;
		delta *= -1;
	}
	vector<int> ms = *ns;
	for (delta; delta >= 0; delta--) {
		for (int i = 0; i < (*ns).size(); i++) {
			if (isNegative) {
				if (i > 0) {
					(*ns)[i - 1] = ms[i];
				}
				else {
					(*ns)[(*ns).size() - 1] = ms[i];
				}
			}
			else {
				if (i < (*ns).size() - 1) {
					(*ns)[i + 1] = ms[i];
				}
				else {
					(*ns)[0] = ms[i];
				}
			}
		}
	}
}