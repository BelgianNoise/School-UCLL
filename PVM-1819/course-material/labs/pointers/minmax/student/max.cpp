
int* max(int* x, int* y, int* z) {
	if (*x > *y) {
		if (*x > *z) {
			return x;
		}
		else {
			return z;
		}
	}
	return y;
}