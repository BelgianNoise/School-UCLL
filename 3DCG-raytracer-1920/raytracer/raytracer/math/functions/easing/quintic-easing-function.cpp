#include "math/functions/easing/quintic-easing-function.h"
#include "math/interval.h"
#include <assert.h>
using namespace math;
using namespace math::functions;


EasingFunction math::functions::easing::quintic_in()
{
	std::function<double(double)> lambda = [](double t) {
		assert(interval(0.0, 1.0).contains(t));

		return t*t*t*t*t;
	};

	return from_lambda(lambda);
}

EasingFunction math::functions::easing::quintic_out()
{
	std::function<double(double)> lambda = [](double t) {
		assert(interval(0.0, 1.0).contains(t));
		return (t - 1) * (t - 1) * (t - 1) * (t - 1) * (t - 1) + 1;
	};

	return from_lambda(lambda);
}

EasingFunction math::functions::easing::quintic_inout()
{
	std::function<double(double)> lambda = [](double t) {
		assert(interval(0.0, 1.0).contains(t));
		if (t < 0.5) {
			return 16 * t * t * t * t * t;
		}
		double p = (2 * t) - 2;
		return 0.5 * p * p * p * p * p + 1;
	};

	return from_lambda(lambda);
}