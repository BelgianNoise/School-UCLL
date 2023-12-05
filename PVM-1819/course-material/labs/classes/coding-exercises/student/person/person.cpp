#include "person.h"

Person::Person(std::string name) : Person(name, nullptr, nullptr) { }

Person::Person(std::string name, Person* mother, Person* father)
{
	this->name = name;
	this->mother = mother;
	this->father = father;
	
	if (this->mother != nullptr){
		this->mother->children.push_back(this);
	}
	if (this->father != nullptr) {
		this->father->children.push_back(this);
	}
}

std::string Person::get_name() const { return this->name; }

std::vector<Person*> Person::get_grandchildren() const
{
	std::vector<Person*> result;

	for (Person* child : this->children) {
		result.insert(result.end(), child->children.begin(), child->children.end());
	}
	return result;
}

bool Person::is_ancestor(const Person& p) const
{
	return (this->mother == &p) || (this->father == &p) ||
		(this->mother != nullptr && this->mother->is_ancestor(p)) ||
		(this->father != nullptr && this->father->is_ancestor(p));
}

bool Person::is_descendant(const Person& p) const
{
	if (std::find(children.begin(), children.end(), p) != children.end())
	{
		return true;
	}
	else {
		for (Person* child : this->children) {
			if (child->is_descendant(p)) {
				return true;
			}
		}
		return false;
	}

}