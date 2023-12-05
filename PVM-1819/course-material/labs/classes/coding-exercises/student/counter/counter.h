#ifndef COUNTER_H
#define COUNTER_H

class Counter
{
	unsigned value;

public:
	Counter();
	Counter(unsigned);

	unsigned getValue() const;
	void setValue(unsigned);

	void increment();
	void reset();
};

#endif