#include "crop/crop.h"

using namespace std;

vector<int> crop(vector<int> ns, unsigned n) {
	return vector<int>(ns.begin() + n, ns.end() - n);
}