#ifndef EXCLUDE_SCRIPTING

#include "scripting/samplers-module.h"
#include "samplers/samplers.h"
#include "scripting/scripting-util.h"

using namespace chaiscript;
using namespace raytracer;
using namespace math;


namespace
{
    struct SamplerLibrary
    {
        Sampler single() const
        {
            return samplers::single();
        }
		Sampler random(int n) const
		{
			return samplers::random(n);
		}
		Sampler stratified(const int& n, const int& m) const
		{
			return samplers::stratified(n, m);
		}

		Sampler jittered(const int& n, const int& m) const
		{
			return samplers::jittered(n, m);
		}		
		Sampler halfJittered(const int& n, const int& m) const
		{
			return samplers::halfJittered(n, m);
		}		
		Sampler nRooks(const int& n) const
		{
			return samplers::nRooks(n);
		}		
		Sampler multiJittered(const int& n) const
		{
			return samplers::multiJittered(n);
		}

    };
}

ModulePtr raytracer::scripting::_private_::create_samplers_module()
{
    auto module = std::make_shared<chaiscript::Module>();

    util::register_type<Sampler>(*module, "Sampler");

    auto sampler_library = std::make_shared<SamplerLibrary>();
    module->add_global_const(chaiscript::const_var(sampler_library), "Samplers");

#   define BIND(NAME)  module->add(fun(&SamplerLibrary::NAME), #NAME)
    BIND(single);
	BIND(random);
	BIND(stratified);
	BIND(jittered);
	BIND(halfJittered);
	BIND(nRooks);
	BIND(multiJittered);
#   undef BIND

    return module;
}

#endif