#include "uniq/uniq.h"
#include <set>

using namespace std;

void uniq(vector<int>* ns) {
		set<int> set((*ns).begin(), (*ns).end());
		*ns = vector<int>(set.begin(), set.end());
}