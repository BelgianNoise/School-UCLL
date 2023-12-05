// Start counting at 0: nth_prime(0) == 2
// (no, 1 is not a prime)
unsigned nth_prime(unsigned n)
{
		int x = 2;
		
		while(n > 0) {
			bool prime = true;
			x++;
			for (int i = 2; i < x; i++) {
				if (x % i == 0) {
					prime = false;
				}
			}
			if (prime) {
				n--;
			}
		}
		return x;
}