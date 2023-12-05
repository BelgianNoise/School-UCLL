#include "is-palindrome/is-palindrome.h"

using namespace std;

bool is_palindrome(vector<int> ns) {

	for (unsigned i = 0; i < ns.size(); i++) {
		unsigned j = ns.size() - i;
		if (ns[i] != ns[j]) {
			return false;
		}
	}
	return true;
}