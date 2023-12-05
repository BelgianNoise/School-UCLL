#include "counter.h"

	Counter::Counter(unsigned i) { setValue(i); }
	Counter::Counter() : Counter(0) {}
	unsigned Counter::getValue() const{ return value; }
	void Counter::setValue(unsigned s) { value = s; }

	void Counter::increment() { ++value; }
	void Counter::reset() { value = 0; }

