import anime from 'animejs';
import { MdClose } from 'react-icons/md';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';

// Models
import Group from '../../models/group';

// Library
import Groups from '../../lib/groups';

// Styles
import {
  Article, TitleSection, Title, CloseIcon ,Section, SectionTitle, Options, Option, OptionButton, selected
} from './styles';

type AddItemsType = {
  groups: Group[];
  setDisplay: Dispatch<SetStateAction<boolean>>;
}

const AddItems = ({ groups, setDisplay }: AddItemsType) => {
  const [selectedGroup, setSelectedGroup] = useState(Groups[0]);
  const [selectedHeading, setSelectedHeading] = useState(Groups[0].headings[0]);
  const [selectedAccount, setSelectedAccount] = useState(Groups[0].headings[0].accounts[0]);

  /*
  useEffect(() => {
    const clickedGroup = document.getElementById(`option-${selectedGroup.name}`) as HTMLButtonElement;
    clickedGroup?.classList.add('selected');
  }, [selectedGroup]);
  */

  return (
    <Article className="add-items">
      <TitleSection>
        <Title>Agregá una cuenta</Title>
        <CloseIcon>
          <MdClose onClick={() => setDisplay(false)} />
        </CloseIcon>
      </TitleSection>
      <Section>
        <SectionTitle>
          Seleccioná una masa patrimonial o de resultado.
        </SectionTitle>
        <Options>
          { groups.map((group) => {
            return <Option key={group.name}>
              <OptionButton
                id={`option-${group.name}`}
                onClick={() => setSelectedGroup(group)}
              >
                {group.name}
              </OptionButton>
            </Option>;
          }) }
        </Options>
      </Section>
      <Section>
        <SectionTitle>
          Seleccioná el rubro de la cuenta
        </SectionTitle>
        <Options>
          { selectedGroup.headings.map((heading) => {
            return <Option key={heading.name}>
              <OptionButton 
                onClick={() => setSelectedHeading(heading)}
              >
                {heading.name}
              </OptionButton>
            </Option>;
          })}
        </Options>
      </Section>
      <Section>
        <SectionTitle>
          Seleccioná la cuenta.
        </SectionTitle>
        <Options>
          { selectedHeading.accounts.map((account) => {
            return <Option key={account.name}>
              <OptionButton onClick={() => setSelectedAccount(account)}>
                {account.name}
              </OptionButton>
            </Option>;
          })}
        </Options>
      </Section>
      <Section>
        <SectionTitle>
          Introducí las sumas del debe y del haber.
        </SectionTitle>
      </Section>
    </Article>
  );
};

export const showAddItems = () => {
  anime({
    targets: '.add-items',
    scale: [0.50, 1.02, 1],
    opacity: ['0%', '100%'],
    duration: 500,
    easing: 'easeOutQuad'
  });
};

export const hideAddItems = () => {
  anime({
    targets: '.add-items',
    scale: [1, 1.02, 0.50],
    opacity: ['100%', '0%'],
    duration: 500,
    easing: 'easeOutQuad',
  });
};

export default AddItems;