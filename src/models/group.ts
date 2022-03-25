import Heading from './heading';

type GroupType = {
  name: string;
  headings: Heading[];
}

class Group {
  name: string;
  headings: Heading[];

  constructor ({ name, headings }: GroupType) {
    this.name = name;
    this.headings = headings;
  }
}

export default Group;
