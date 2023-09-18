import {Section} from './Section/Section'
import { Header } from './Header/Header';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { FilterContacts } from './Filter/Filter';

function App() {
  return (
    <>
    <Section title="Phonebook">
      <ContactForm />
      <Header title="Contacts" />
      <FilterContacts />
      <ContactList />
      </Section>
    </>
  );
}

export default App;
