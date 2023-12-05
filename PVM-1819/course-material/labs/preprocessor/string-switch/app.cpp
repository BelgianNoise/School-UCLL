#include <iostream>

#define SWITCH_STRING(tag)    if(#tag)
#define STRING_CASE(string)   if(#string == tag)
#define STRING_ELSE				else



int foo(std::string tag)
{
    SWITCH_STRING(tag)
    {
        STRING_CASE(a)
        {
            return 1;
        }

        STRING_CASE(b)
        {
            return 2;
        }

        STRING_CASE(abc)
        {
            return 3;
        }

        STRING_ELSE
        {
            return -1;
        }
    }
}